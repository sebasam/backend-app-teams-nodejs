const { Schema, model } = require('mongoose')

const teamSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('Team', teamSchema)