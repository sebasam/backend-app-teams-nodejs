const { Schema, model } = require('mongoose')

const eventSchema = Schema({
    team1: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true
    },
    marcador1: {
        type: Number,
        required: true
    },
    marcador2: {
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