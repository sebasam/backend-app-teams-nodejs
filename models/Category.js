const { Schema, model, mongoose } = require('mongoose')

const categorySchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('Category', categorySchema)