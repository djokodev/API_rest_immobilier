console.log("point d'entrer !")

// on importe notre application express ici pour pouvoir l'utilser
const app = require("./application")

// on defini le port sur le quel notre application va ecouter genre ecoute sur le port qui est dans le chemin ou sur le port 3000
const port = process.env.port || 3000

app.listen(port, () => {
    console.log("notre application ecoute sur le port "+port)
})