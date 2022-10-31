const User = require('../models/User')
const bcrypt = require('bcrypt')
const signUserId = require('../configs/jwt')





//@desc registering new user
//@method POST

const registerUser = async (req, res) => {

    const { username, email, password } = req.body

    //checking Duplicate email

const duplicateUser = await User.findOne({email:email})

if(duplicateUser) return res.status(401).json({message:`The email ${email} already exists`})
    
//hashing user password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

const userObj = {
    username:username,
    email:email,
    password:hashedPassword

}
//Creating new user

const user = await User.create(userObj)

if(!user) return res.status(400).json({message:"Unable to create user"})

return res.status(200).json({
    
    message:`User with username ${username} is created`,
    username:user.username,
    email:user.email,
    acessToken:signUserId(user._id)

})

}

module.exports = {registerUser}