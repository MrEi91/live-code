'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let restSchema = Schema({
  'name': String,
  'owner': String,
  'address': String,
  'open_status': Boolean
}, {
  timestamps: true
})

let rest = mongoose.model('rest', restSchema)

module.exports = rest
