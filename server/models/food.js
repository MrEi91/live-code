'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let foodSchema = Schema({
  'name': String,
  'price': Number,
  'expired_date': {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

let food = mongoose.model('food', foodSchema)

module.exports = food
