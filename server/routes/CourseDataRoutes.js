const Category = require('../models/CourseCategory')
const router = require('express').Router()
const { addCategoryData, getCategoryData, updateBlog, addCourseToUser } = require('../controllers/CategoryController')
const { protect } = require('../middleWares/authMiddleware')


router.get("/:category",protect, getCategoryData)
router.post("/create",protect, addCategoryData)
router.put("/updateblog",protect, updateBlog)
router.put("/addusercourse",protect, addCourseToUser)


module.exports = router