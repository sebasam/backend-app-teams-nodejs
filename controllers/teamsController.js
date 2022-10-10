const Team = require('./../models/Team')
const Category = require('./../models/Category')
const path = require('path')
const fs = require('fs')

const getTeamImage = async(req, res, next) => {
    const { name } = req.params
    try {
        const team = await Team.findOne({ name: name })
        res.sendFile(path.join(__dirname, '..', `public/images/${ team.imageName }`))
    } catch (error) {
        next(error)
    }
}

const getTeams = async(req, res) => {
    try {
        const team = await Team.find()
        return res.status(200).json({
            ok: true,
            team
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'Please contact to support',
            error: error
        })
    }
}

const createTeam = async(req, res, next) => {
    const { name, category } = req.body
    const image = req.file
    try {
        const team = await Team.findOne({ name: name })
        const myCategory = await Category.findOne({ name: category })
        if(team || !myCategory) return res.status(400).json({
            ok: false,
            msg: 'Team is already exist!! or category Doesnt exist!'
        })        
        const dbteam = new Team({
            name: name,
            image: `http://localhost:3001/public/images/${ image.originalname }`,
            imageName: image.originalname,
            category: category
            
        })
        dbteam.save()
        return res.status(201).json({
            ok: true,
            msg: 'Team created!'
        })        
    } catch (error) {
        next(error)
        console.log(error)
    }
}

const deleteTeam = async(req, res) => {
    const id = req.params.id    
    try {
        const myTeam = await Team.findOne({ id: id })
        fs.unlinkSync(path.join(__dirname, '..', `public/images/${ myTeam.imageName }`))
        const team = await Team.findOneAndDelete({ id: id })
        
        if(team === null) {
            return res.status(404).json({
                ok: false,
                msg: 'This ID not exists in database'
            })
        }
        
        return res.status(200).json({
            ok: true,
            msg: 'Team deleted!!'
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'Invalid ID please try again',
            error: error
        })
    }
}

const updateTeam = async(req, res) => {
    const id = req.params.id
    const { name } = req.body
    try {
        const team = await Team.findByIdAndUpdate(id, { name: name })
        if(team === null) {
            return res.status(404).json({
                ok: false,
                msg: 'ID doesnt exist in database'
            })
        }
        return res.status(200).json({
            ok: true,
            msg: 'Team updated!'
        })
    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'ID invalid!',
            error: error
        })
    }
}

module.exports = {
    getTeams,
    createTeam,
    deleteTeam,
    updateTeam,
    getTeamImage
}