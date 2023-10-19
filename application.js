// importationd des modules
const express = require("express")
require('dotenv').config()
const routeImmobilier = require('./routes/immobilierRoute')

// Middlewares
const morgan = require("./middlewares/infosRequests")
const bodyParser = require("./middlewares/dataParser")

// ODM
const mongoose = require("mongoose")

// on cree une instance de l'application express pour pouvoir utiliser la bibliotheque express
const app = express()

// utilisation des middleware sur toute l'application
app.use(morgan)
app.use(bodyParser)


// connection a mongodb
mongoose.connect(process.env.LIEN, {
    useNewUrlParser: true,
    useUnifiedTopology : true,
})
    .then(() => console.log("connexion reussi a mongodb"))
    .catch((error) => console.log("Echec de connexion a la bd "+error))


// routes
app.use("/api/immobilier", routeImmobilier)

// on exporte notre application pour pouvoir l'utiliser ailleur
module.exports = app


