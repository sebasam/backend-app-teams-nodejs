const express = require('express')
const router = express.Router()
const { getEvents, createEvent, deleteEvent, updateEvent } = require('./../controllers/eventsController')

router.get('/', getEvents)

router.post('/', createEvent)

router.delete('/delete/:id', deleteEvent)

router.put('/update/:id', updateEvent)

module.exports = router