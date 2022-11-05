const Url = require('../models/Urls')
const asyncHandler = require('express-async-handler')



//@desc creating new url
//@route  /url
//@acess Protected,Admin only
//@method POST
const addUrl = asyncHandler(async (req, res) => {

    const { newUrl, courseId } = req.body


    //Checking duplicate url
    const duplicateUrl = await Url.findOne({ address: newUrl })

    if (duplicateUrl) return res.status(404).json({ message: "Sorry this url already exists" })

    //createing new Url
    urlObj = {
        address: newUrl,
        course: courseId
    }

    const url = await Url.create(urlObj)

    if (!url) return res.status(404).json({ message: "Sorry unable to add url.Please provide adequate details" })
    return res.status(200).json({
        message: "Sucessfully added the url,",
    })

})

//@desc Getting all urls
//@method Get
//@acess Private,Admin only
//@route /url
const getUrls = asyncHandler(async (req, res) => {


    try {
        const urls = await Url.find().populate("course")

        if (!urls) return res.status(404).json({ message: "Unable to fetch url" })

        if (urls.length === 0) return res.status(200).json({ message: "Urls is empty" })

        return res.status(200).json(urls)
    } catch (error) {

    }

})

module.exports = { addUrl, getUrls }