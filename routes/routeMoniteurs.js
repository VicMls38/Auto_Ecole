const express = require('express');
const controllerMoniteurs = require('../controllers/controllerMoniteurs');

const Controller = require('../controllers/controllerMoniteurs');

const routeur = express.Router();


//routeur.get("/accueil", Controller.Affichage_Moniteurs)
routeur.get("/testAffichage", Controller.Affichage_Moniteurs)
routeur.get("/moniteur", controllerMoniteurs.Page_Moniteurs)


module.exports = routeur