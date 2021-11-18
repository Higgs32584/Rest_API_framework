require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))

app.use(express.json())

const animalsRouter = require('./routes/animals')
app.use('/animals', animalsRouter)

app.listen(27017, () => console.log('Backend Started'))
app.listen(3000, () => console.log('Frontend Started'))