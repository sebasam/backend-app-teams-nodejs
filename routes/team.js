const express = require('express')
const router = express.Router()
const { upload} = require('../middlewares/upload')
const { getTeams, createTeam, updateTeam, deleteTeam, getTeamImage, getTeamsByCategory } = require('./../controllers/teamsController')

router.get('/:name', getTeamImage)

router.get('/', getTeams)

router.get('/category/:category', getTeamsByCategory)

router.post('/', upload, createTeam)

router.delete('/delete/:name', deleteTeam)

router.put('/update/:name', updateTeam)

module.exports = router