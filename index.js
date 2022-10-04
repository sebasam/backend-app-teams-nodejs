const express = require('express')

const app = express()
const port = 3001
const api = require('./routes/api')
const cors = require('cors')
const path = require('path')

const dataBaseConnection = require('./db/config')
dataBaseConnection()

app.use( express.json() )
app.use(express.urlencoded({ extended: false }));
app.use(cors())



app.use('/api', api)

app.listen(port, () => {
    console.log(`Server running in port ${ port }`)
})