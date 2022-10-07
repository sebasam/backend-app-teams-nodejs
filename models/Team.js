const { Schema, model } = require('mongoose')

const teamSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    }
})

module.exports = model('Team', teamSchema)