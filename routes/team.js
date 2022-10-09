const express = require('express')
const router = express.Router()
const { upload} = require('../middlewares/upload')
const { getTeams, createTeam, updateTeam, deleteTeam, getTeamImage } = require('./../controllers/teamsController')

router.get('/:name', getTeamImage)

router.get('/', getTeams)

router.post('/', upload, createTeam)

router.delete('/delete/:id', deleteTeam)

router.put('/update/:id', upload, updateTeam)

module.exports = router