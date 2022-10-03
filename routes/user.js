const express = require('express')
const router = express.Router()
const { validateFields } = require('./../middlewares/validationResult')
const { users } = require('./../middlewares/validationBody')
const { createUser, deleteUser } = require('./../controllers/userController')

router.post('/', users, validateFields, createUser)

router.delete('/delete/:id', deleteUser)

module.exports = router