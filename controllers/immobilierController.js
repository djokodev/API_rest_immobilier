// on recupere le model Immobilier
const ImmobilierModel = require("../models/immobilierModel")


// logique du control des routes lies au model Immobilier

exports.getAllImmobilier = async (req, res) => {
    try {
        console.log("Route qui recupere tout les immobiliers")
        res.status(200).json(ImmobilierModel)
    } catch (error) {
        console.log("Echec de recuperation de tout les biens immobilier "+error)
    }
}

