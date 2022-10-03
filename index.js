const express = require('express')

const app = express()
const port = 3000

const dataBaseConnection = require('./db/config')
dataBaseConnection()

app.use( express.json() )

app.listen(port, () => {
    console.log(`Server running in port ${ port }`)
})