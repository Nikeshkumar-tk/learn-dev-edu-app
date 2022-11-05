const Actions = require('../models/userActions')
const asyncHandler = require('express-async-handler')


//@desc Creating a new user
//@method POST
//@acess protected
//@route /actions/create

const createUserActions = asyncHandler(async (req, res) => {

    const actions = await Actions.create({
        userId: req.user._id,
        lastWatched: req.body.lastWatched
    })
    if (!actions) return res.status(404).json({ message: "something went wrong" })
    return res.status(200).json({ message: "Action sucessfully added", user: req.user })
})

//@desc Getting all user actions
//@method Get
//@route /actions/getactions
//@acess protected, User

const getUSerActions = asyncHandler(async (req, res) => {

    const actions = await Actions.find({
        userId: req.user._id
    })

    if (actions.length === 0) return res.status(200).json({
        message: "The user doesnot have action actions"
    })

    return res.status(200).json(actions)

})

module.exports = { createUserActions , getUSerActions}