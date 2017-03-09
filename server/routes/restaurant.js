'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/restaurant')

router.get('/', controller.readRest)
router.get('/select/:id', controller.findOneData)
router.post('/create', controller.createRest)
router.put('/update/:id', controller.updateRest)
router.delete('/delete/:id', controller.removeRest)

module.exports = router
