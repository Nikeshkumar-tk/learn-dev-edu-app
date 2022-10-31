const { request } = require('express')
const Actions = require('../models/userActions')



//@desc Creating a new user
//@method POST
//@protected TRUE

const createUserActions = async (req, res) => {

    const actions = await Actions.create({
        userId: req.body.userId,
        lastWatched: req.body.lastWatched
    })
    if (!actions) return res.status(404).json({ message: "something went wrong" })
    return res.status(200).json({ message: "Action sucessfully added" })
}

module.exports = { createUserActions }