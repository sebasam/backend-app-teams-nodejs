const Event = require('./../models/Event')
const Team = require('./../models/Team')

const getEvents = async(req, res) => {
    try {
        const events = await Event.find()
        return res.status(200).json({
            ok: true,
            events
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Please contact to support',
            error: error
        })
    }
}

const createEvent = async(req, res) => {
    const { team1, team2, category, gameDate } = req.body
    const points = 0    
    try {
        const myTeam1 = await Team.findOne({ name: team1 })
        const myTeam2 = await Team.findOne({ name: team2 })
        if(!myTeam1 || !myTeam2) return res.status(404).json({
            ok: false,
            msg: 'Some of teams doesnt exist!'
        })
        if(myTeam1.category !== myTeam2.category) {
            return res.status(400).json({
                ok: false,
                msg: 'Teams in differents categories cannot play'
            })
        }
        const eventName = `${ team1 } VS ${ team2 }`
        const event = await Event.findOne({ name: eventName })
        if(event) return res.status(400).json({
            ok: false,
            msg: 'This event is already exist!!'
        })
        const dbEvent = new Event({
            name: eventName,
            team1: team1,
            team2: team2,
            points1: points,
            points2: points,
            category: category,
            gameDate: gameDate
        })
        dbEvent.save()
        return res.status(200).json({
            ok: true,
            msg: 'Event created!',
            dbEvent
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Please contact to support',
            error: error
        })
    }
}

const deleteEvent = async(req, res) => {
    const id = req.params.id    
    try {
        const event = await Event.findOneAndDelete({ _id: id })
        if(event === null) {
            return res.status(404).json({
                ok: false,
                msg: 'This ID doesnt exists in database'
            })
        }
        return res.status(200).json({
            ok: true,
            msg: 'Event deleted!!'
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'Invalid ID please try again',
            error: error
        })
    }
}

const updateEvent = async(req, res) => {
    const id = req.params.id
    const { gameDate } = req.body
    try {
        const event = await Event.findByIdAndUpdate(id, { gameDate: gameDate })
        if(event === null) {
            return res.status(404).json({
                ok: false,
                msg: 'ID doesnt exist in database'
            })
        }
        return res.status(200).json({
            ok: true,
            msg: 'Event updated!'
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
    getEvents,
    createEvent,
    deleteEvent,
    updateEvent
}