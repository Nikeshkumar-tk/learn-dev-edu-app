const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

//Decoding token and passing user data to the controllers

const protect = asyncHandler(async (req, res, next) => {

    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        try {
            //Getting token from request
            token = req.headers.authorization.split(' ')[1]

            //Verify token

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Geting user info using token
            req.user = await User.findById(decoded.id).select("-password")
            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Not authorized")
        }

        if(!token){
            res.status(401)
            throw new Error("Not authorized")
        }
    }

})


module.exports = {protect}

