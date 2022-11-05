const Category = require('../models/CourseCategory')
const asyncHandler = require('express-async-handler')


//@desc Getting category data
//@route protected
//@acess user only
//@method GET
//@route /course/:category


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
//@route /course/create

const addCategoryData = asyncHandler(async (req, res) => {

    const { title, blog } = req.body

    const categoryObj = {
        title: title,
        blog: blog

    }

    const course = await Category.create(categoryObj)
    if (!course) return res.status(404).json({ message: "Failed to add data" })

    return res.status(200).json({ message: "Sucessfully added daata" })

})

//@desc Updating the blog
//Method PUT
//@acess private,admin only
//@route /course/updateblog

const updateBlog = asyncHandler(async (req, res) => {
    const { blog, courseId } = req.body
    try {
        const blogUpdatedCourse = await Category.findByIdAndUpdate({ _id: courseId },
            {
                blog: blog
            }

        )
        if (!blogUpdatedCourse) return res.status(404).json({ mesage: "Unable to update the blog" })
        return res.status(200).json({ message: "Blog updated sucessfully" })
    } catch (error) {
        console.log(error)
    }

})




module.exports = { addCategoryData, getCategoryData, updateBlog }