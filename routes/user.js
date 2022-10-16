const express = require('express')
const router = express.Router()
const { validateFields } = require('./../middlewares/validationResult')
const { users } = require('./../middlewares/validationBody')
const { createUser, deleteUser, getUsers, loginUser } = require('./../controllers/userController')

router.get('/', getUsers)

router.post('/', users, validateFields, createUser)

router.delete('/delete/:id', deleteUser)

router.post('/login', loginUser)

module.exports = router