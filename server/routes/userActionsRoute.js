const router = require('express').Router()
const Actions = require('../models/userActions')
const { createUserActions,getUSerActions } = require('../controllers/userActionController')
const { protect } = require('../middleWares/authMiddleware')




router.route("/create").post(protect,createUserActions)
router.get("/getactions",protect,getUSerActions)

module.exports = router