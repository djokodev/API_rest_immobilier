// importationd du module express
const express = require("express")

const morgan = require("./middlewares/infosRequests")
const bodyParser = require("./middlewares/dataParser")

// on cree une instance de l'application express pour pouvoir utiliser la bibliotheque express
const app = express()


app.use(morgan)
app.use(bodyParser)

app.get("", (req, res) => {
    res.status(200)
    res.send("la requete a ete bien effectue")
})


// on exporte notre application pour pouvoir l'utiliser ailleur
module.exports = app


