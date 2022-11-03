const User = require('../models/User')
const router = require('express').Router()
const { registerUser, userLogin } = require('../controllers/userController')

router.post("/register", registerUser)
router.post("/login",userLogin)



module.exports = router

