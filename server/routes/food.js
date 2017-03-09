'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/food')

router.get('/', controller.readFood)
router.post('/create', controller.createFood)
router.put('/update/:id', controller.updateFood)
router.delete('/delete/:id', controller.removeFood)

module.exports = router
