const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    address:{
        type:String,
        unique:true
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
})

module.exports = mongoose.model("Url",urlSchema)