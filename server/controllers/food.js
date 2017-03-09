'use strict'
const express = require('express')
const router = express.Router()
const food = require('../models/food')

let createFood = (req, res, next) => {
  food.create(req.body).then((data) => {
    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let readFood = (req, res, next) => {
  food.find({}).then((data) => {
    !data ? res.send('Items isEmpty') : res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let updateFood = (req, res, next) => {
  food.findById(req.params.id).then((data) => {
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

let removeFood = (req, res, next) => {
  food.findById(req.params.id).then((data) => {
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

let findOneData = (req, rest, next) => {
  food.findOne(req.query).then((data) => {
    if (!data) {
      res.send('Data is not found!')
    } else {
      res.send(data)
    }
  }).catch((e) => {
    if (e) throw e
  })
}

module.exports = {
  readFood,
  createFood,
  updateFood,
  removeFood,
  findOneData
}
