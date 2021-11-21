require('dotenv').config()

const express = require('express')
const app = express()
const mongodb = require('mongodb')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/animal_information', { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))

app.use(express.json())

const animalsRouter = require('./routes/animals')
app.use('/animals', animalsRouter)


app.listen(27017, () => console.log('Backend Started'))
app.listen(3000, () => console.log('Frontend Started'))