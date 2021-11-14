require('dotenv').config()

const express = require('express')
const app = express()
const mongoose= require('mongoose')

//connecting to database
mongoose.connect('mongodb://localhost/animal_information', { useNewUrlParser : true })
const db = mongoose.connection
//error message
db.on('error',(error) => console.error(error))
//Doesnt Work?? rest works fine tho
db.once(eventName='connection',() => console.log('Connected to Database'))
//Allows API to use JSON
app.use(express.json())
//creates path to send requests
const animalsRouter = require('C:/Users/mjhig/.anaconda/Rest API framework/routes/animals')
app.use('/animals',animalsRouter)

// runs statement when server is functional
app.listen(3000, () => console.log('Server Started'))