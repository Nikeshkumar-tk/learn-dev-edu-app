const Category = require('../models/CourseCategory')
const router = require('express').Router()
const { addCategoryData, getCategoryData, updateBlog } = require('../controllers/CategoryController')


router.get("/:category", getCategoryData)
router.post("/create", addCategoryData)
router.put("/updateblog", updateBlog)


module.exports = router