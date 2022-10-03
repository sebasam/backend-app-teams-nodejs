const express = require('express')

const app = express()
const port = 3000
const api = require('./routes/api')

const dataBaseConnection = require('./db/config')
dataBaseConnection()

app.use( express.json() )

app.use('/api', api)

app.listen(port, () => {
    console.log(`Server running in port ${ port }`)
})