const Category = require('../models/CourseCategory')
const router = require('express').Router()
const { addCategoryData, getCategoryData,editCourseUrl } = require('../controllers/CategoryController')


router.get("/:category", getCategoryData)
router.post("/create", addCategoryData)


module.exports = router