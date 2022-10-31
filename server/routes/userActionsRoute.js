const router = require('express').Router()
const Actions = require('../models/userActions')
const { createUserActions } = require('../controllers/userActionController')

router.route("/create").post(createUserActions)

module.exports = router