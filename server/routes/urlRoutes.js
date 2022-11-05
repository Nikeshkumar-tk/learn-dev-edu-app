const router = require('express').Router()
const { addUrl, getUrls } = require('../controllers/urlControllers')


router.route("/")
.post(addUrl)
.get(getUrls)


module.exports = router