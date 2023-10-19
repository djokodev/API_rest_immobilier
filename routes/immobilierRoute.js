const express = require("express")
const router = express.Router()

// on recuperer le constroler pour l'immobilier
const immobilierController = require("../controllers/immobilierController")

console.log("Nous sommes dans ImmobilierRoute")

// routes
router.get("", immobilierController.getAllImmobilier)




module.exports = router