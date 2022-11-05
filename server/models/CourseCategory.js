const mongoose = require('mongoose')



const CourseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    blog:{
        type:String,

    },      
    
})
module.exports = mongoose.model("Category", CourseSchema)