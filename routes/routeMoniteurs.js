const express = require('express');

const Controller = require('../controllers/controllerMoniteurs');

const routeur = express.Router();


//routeur.get("/accueil", Controller.Affichage_Moniteurs)
routeur.get("/moniteur", Controller.Page_Moniteurs)
routeur.get("/ajout_moniteur", Controller.Ajout_Moniteurs)


module.exports = routeur