const mongoose = require('mongoose')

const Immobilier = new mongoose.Schema({
    type: { type: String, require: true }, // represente le type de maison (appart, maison simple, immeuble etc..)
    title: String,
    annee: {type: Number}, // combien d'annee le bien possede
    etat: {type: String, enum: ["Neuf", "Occasion"]},
    surface: {type: Number},
    jardin: {type: String, enum:["Oui", "Non"]},
    ville: {type: String, require: true},
    adresse: {type: String, require: true},
    proprietaire: [{type: mongoose.Types.ObjectId, ref: "User"}] // qui fais juste reference a l'utilisateur a qui appartien le bien dans notre bd
}) 

module.exports = mongoose.model("Immobilier", Immobilier) // on peut choisir de l'appeler autrement ici genre bienImmo par exemple