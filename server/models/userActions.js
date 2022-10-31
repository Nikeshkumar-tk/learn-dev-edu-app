const mongoose = require('mongoose')

const userActionSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    lastWatched:{
        type:String,
    }
})

module.exports = mongoose.model("Actions", userActionSchema)