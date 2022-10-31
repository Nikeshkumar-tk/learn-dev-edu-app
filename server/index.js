const express = require('express')
const app = express()
const connectDb = require('./configs/db')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoutes')
const userActioRoute = require('./routes/userActionsRoute')


//PORT
const PORT = process.env.PORT || 5000


require("dotenv").config()

connectDb()
app.use(express.json())

//Routes

app.use("/", userRoute)
app.use("/actions", userActioRoute)



mongoose.connection.once('open', () => {

    console.log('connected to mongodb database')

    app.listen(PORT, () => console.log(`server running on port ${PORT}`))

})