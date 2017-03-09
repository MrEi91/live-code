'use strict'
const express = require('express')
const router = express.Router()
const rest = require('../models/restaurant')

let createRest = (req, res, next) => {
  rest.create(req.body).then((data) => {
    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let readRest = (req, res, next) => {
  rest.find({}).then((data) => {
    !data ? res.send('Items isEmpty') : res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let updateRest = (req, res, next) => {
  rest.findById(req.params.id).then((data) => {
    if (!data) {
      res.send('Data is not defind')
    } else {
      data.update(req.body).then((result) => {
        res.send(result)
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

let removeRest = (req, res, next) => {
  rest.findById(req.params.id).then((data) => {
    if (!data) {
      res.send('Data is not defind')
    } else {
      data.remove(req.params.id).then((result) => {
        res.send('Data has been deleted')
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

module.exports = {
  readRest,
  createRest,
  updateRest,
  removeRest
}
