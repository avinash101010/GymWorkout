require('dotenv').config() //to use the environment variables .config() is used to load the environment variables from the .env file
const express = require('express')
const mongoose = require('mongoose')
const WorkoutRoutes = require('./routes/workouts')

const app = express() // we can write anything other than app

/** */

// /middle Ware 
// console.log('This is middleware');
app.use(express.json()) //this is used to parse the incoming request with JSON payloads

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', WorkoutRoutes)


mongoose.connect(process.env.MONGO_URI) //connect to the database
    .then(() => {
        console.log('Connected to the database')
    })
    .catch((error) => {
        console.log('Error:', error)
    })
app.listen(process.env.PORT, () => {//here in process.enc.PORT process is the global object and env is the property of the process object and PORT is the environment variable
    console.log('Server is running on port no:', process.env.PORT)
    // process.exit(0)
})
//listen for requests
//this code waits for keyboard interrupt and then it will stop the server
//to end the sever after printing the message we can use process.exit(0) in place of console.log below is the modified code
//listen for requests



