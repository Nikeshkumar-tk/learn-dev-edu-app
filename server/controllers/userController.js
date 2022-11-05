const User = require('../models/User')
const bcrypt = require('bcrypt')
const signUserId = require('../configs/jwt')
const asyncHandler = require('express-async-handler')
const { response } = require('express')





//@desc registering new user
//@method POST

const registerUser = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body

    //checking Duplicate email

    const duplicateUser = await User.findOne({ email: email })

    if (duplicateUser) return res.status(401).json({ message: `The email ${email} already exists` })

    //hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const userObj = {
        username: username,
        email: email,
        password: hashedPassword

    }


    //Creating new user

    const user = await User.create(userObj)

    if (!user) return res.status(400).json({ message: "Unable to create user" })

    return res.status(200).json({

        message: `User with username ${username} is created`,
        username: user.username,
        email: user.email,
        acessToken: signUserId(user._id)

    })

}
)
//@desc Authentication of user

const userLogin = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    const foundEmail = await User.findOne({ email: email })

    if (!foundEmail) return res.status(404).json({ message: "This email is not registered" })

    //Verifying password

    const passwordVerified = await bcrypt.compare(password, foundEmail.password)

    if (!passwordVerified) return res.status(401).json({ message: "Authentication failed" })

    return res.status(200).json({
        message: "Sucessfully logged in",
        username: foundEmail.username,
        email: foundEmail.email,
        acessToken: signUserId(foundEmail._id)
    })
})

module.exports = { registerUser, userLogin }