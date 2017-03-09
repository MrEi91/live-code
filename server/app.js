const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/livecode', (err) => {
  err ? console.log('is not connected') : console.log('connected')
})
mongoose.Promise = global.Promise

const app = express()

let index = require('./routes/index')
let food = require('./routes/food')
let rest = require('./routes/restaurant')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', index)
app.use('/api/food', item)
app.use('/api/rest', customer)

app.listen(3000)

module.exports = app
