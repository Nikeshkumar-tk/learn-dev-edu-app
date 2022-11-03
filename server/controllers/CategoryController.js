const Category = require('../models/CourseCategory')
const asyncHandler = require('express-async-handler')

//@desc Getting category data
//@route protected
//@acess user only
//@method GET


const getCategoryData = asyncHandler(async (req, res) => {

    const { category } = req.params

    const CategoryData = await Category.findOne({ title: category })

    if (!CategoryData) return res.status(400).json({ message: "Sorry this course is not available" })

    return res.status(200).json({
        message: "Sucessfully fetched category data",
        title: CategoryData.title,
        url: CategoryData.url
    })

})

//@desc Add category data
//@acess Admin only
//@route protected
//@method POST

const addCategoryData = asyncHandler(async (req, res) => {

    const { title, urls } = req.body

    const categoryObj = {
        title: title,
        urls: urls
    }

    const course = await Category.create(categoryObj)
    if (!course) return res.status(404).json({ message: "Failed to add data" })

    return res.status(200).json({ message: "Sucessfully added daata" })

})
module.exports = { addCategoryData, getCategoryData }