const mongoose = require('mongoose')


const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {

        type: String,
        unique: true,
        required: true
    },
    password: {

        type: String,
        required: true

    },

    courses: [mongoose.Schema.Types.ObjectId]

})

module.exports = mongoose.model("User", userSchema)