const express = require('express');

const Controller = require('../controllers/controllerMoniteurs');

const routeur = express.Router();

routeur.get("/testAffichage", Controller.Affichage_Moniteurs)
routeur.get("/accueil", Controller.Affichage_Moniteurs)

module.exports = routeur