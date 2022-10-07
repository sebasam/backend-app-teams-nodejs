const { body } = require('express-validator')

const users = [
    body('name', 'Name cannot be empty or accept numbers!').isString().notEmpty().trim(),
    body('email', 'Email is required').normalizeEmail().not().isEmpty(),
    body('email', 'Email is invalid').normalizeEmail().isEmail(),
    body('password', 'The password must contain uppercase, lowercase, numbers and a special character').isStrongPassword()
]

const teams = [
    
]

const categories = [
    body('name', 'Enter a valid name!').isString({ min: 4 }).notEmpty().trim()
]

const events = [
    body('team1', 'Add a valid team1').isString().notEmpty().trim(),
    body('team2', 'Add a valid team2').isString().notEmpty().trim(),
    body('points1', 'Result must be a number').isNumeric().escape(),
    body('points2', 'Result must be a number').isNumeric().escape(),
    body('category', 'Invalid sport category').isString().notEmpty().trim(),
    body('gameDate', 'Date is not valid').isDate()
]

module.exports = {
    users,
    teams,
    categories,
    events
}