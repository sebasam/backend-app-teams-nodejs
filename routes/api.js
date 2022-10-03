const express = require('express')
const router = express.Router()
const user = require('./user')
const team = require('./team')
const category = require('./category')
const event = require('./event')

router.use('/users', user)
router.use('/teams', team)
router.use('/categories', category)
router.use('/events', event)

module.exports = router