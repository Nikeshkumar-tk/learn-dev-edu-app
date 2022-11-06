const express = require('express')
const app = express()
const connectDb = require('./configs/db')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoute = require('./routes/userRoutes')
const userActioRoute = require('./routes/userActionsRoute')
const courseCategoryRoute = require('./routes/CourseDataRoutes')
const urlRoutes = require('./routes/urlRoutes')


//PORT
const PORT = process.env.PORT || 5000

//Database connection

require("dotenv").config()
connectDb()
app.use(express.json())

//Middlewares

app.use(cors())

//Routes

app.use("/", userRoute)
app.use("/actions", userActioRoute)
app.use("/course", courseCategoryRoute)
app.use("/url", urlRoutes)



mongoose.connection.once('open', () => {

    console.log('connected to mongodb database')

    app.listen(PORT, () => console.log(`server running on port ${PORT}`))

})