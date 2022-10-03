//Conexión a la base de datos
const mongoose = require('mongoose')

const dataBaseConnection = async() => {
    try {
        await mongoose.connect("mongodb+srv://sebasxd:Clave1234@cluster0.vkox5.mongodb.net/teams", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connect!')
    }catch(error){
        console.log(error)
    }
}

module.exports = dataBaseConnection