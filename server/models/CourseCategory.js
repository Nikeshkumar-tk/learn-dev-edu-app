const mongoose = require('mongoose')



const CourseSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    urls:{
        type:[
            String
        ]
    }
})
module.exports = mongoose.model("Category", CourseSchema)