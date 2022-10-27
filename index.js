const express = require('express')

const app = express()
const port = 8081
const api = require('./routes/api')
const cors = require('cors')
const path = require('path')

require('dotenv').config()

const dataBaseConnection = require('./db/config')
dataBaseConnection()

app.use(express.static('/public'))
app.use( express.json() )
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/api', api)

app.listen(port, () => {
    console.log(`Server running in port ${ port }`)
})