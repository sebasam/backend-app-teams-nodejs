const User = require('./../models/User')
const bcrypt = require('bcrypt')
const { generateToken } = require('./../helpers/jwtGenerate')

const getUsers = async(req, res) => {
    try {
        const user = await User.find()
        return res.status(200).json({
            ok: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Please contact to support',
            error: error
        })
    }
}

const createUser = async(req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                msg: 'Email is already exist!'
            })
        }

        const dbUser = new User({
            name: name,
            email: email,
            password: password
        })

        const salt = bcrypt.genSaltSync()
        dbUser.password = bcrypt.hashSync( password, salt )

        const token = await generateToken(dbUser._id, name)

        await dbUser.save()

        return res.status(200).json({
            ok: true,
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            password: dbUser.password,
            token: token
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Please contact to support!!'
        })
    }
}

const deleteUser = async(req, res) => {
    const id  = req.params.id
    try {
        const user = await User.findOneAndDelete({ _id: id })
        if(user === null) return res.status(404).json({
            ok:false,
            msg: 'There isnt any id'
        })
        return res.status(200).json({
            ok: true,
            msg: 'User deleted!!'
        })
    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'ID invalid, please try again',
            error: error
        })
    }
}

const loginUser = async(req, res) => {
    const { email, password } = req.body
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getUsers,
    createUser,
    deleteUser
}