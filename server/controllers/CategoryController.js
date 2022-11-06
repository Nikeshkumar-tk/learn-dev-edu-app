const Category = require('../models/CourseCategory')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')


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

//@desc adding courses to the user
//@method PUT
//@acess protected

const addCourseToUser = asyncHandler(async (req, res) => {
    const { courseId } = req.body

    if (!courseId) return res.status(404).json({ message: "Please provide a courseId" })

    try {
        const duplicateCourse = await User.findById(req.user._id)

        if (duplicateCourse.courses.includes(courseId)) return res.status(404).json({ message: "Given course id already exists" })

        const user = await User.findByIdAndUpdate({ _id: req.user._id }, {
            "$push": { "courses": courseId }
        }, {
            new: true
        })

        if (!user) return res.status(404).json({ message: "Unable to add course" })

        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
    }
})




module.exports = { addCategoryData, getCategoryData, updateBlog, addCourseToUser }