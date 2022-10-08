const { Schema, model } = require('mongoose')

const teamSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = model('Team', teamSchema)