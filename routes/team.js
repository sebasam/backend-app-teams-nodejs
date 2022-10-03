const express = require('express')
const router = express.Router()
const { validateFields } = require('./../middlewares/validationResult')
const { teams } = require('./../middlewares/validationBody')
const { getTeams, createTeam, updateTeam, deleteTeam } = require('./../controllers/teamsController')

router.get('/', getTeams)

router.post('/', teams, validateFields, createTeam)

router.delete('/delete/:id', deleteTeam)

router.put('/update/:id', teams, validateFields, updateTeam)

module.exports = router