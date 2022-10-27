//Conexión a la base de datos
const mongoose = require('mongoose')

const dataBaseConnection = async() => {
    try {
        await mongoose.connect("mongodb+srv://db:27017/teams", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connect!')
    }catch(error){
        console.log(error)
    }
}

module.exports = dataBaseConnection