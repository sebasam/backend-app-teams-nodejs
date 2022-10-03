const { Schema, model } = require('mongoose')

const eventSchema = Schema({
    name: {
        type: String,
        required: true
    },
    team1: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true
    },
    points1: {
        type: Number,
        required: true
    },
    points2: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    gameDate: {
        type: Date,
        required: true
    }
})

module.exports = model('Event', eventSchema)