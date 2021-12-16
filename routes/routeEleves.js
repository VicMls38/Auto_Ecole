const express = require('express');
const Controller = require('../controllers/controllerEleves');

const routeur = express.Router();

routeur.get("/testAffichage", Controller.Affichage_Eleves);
routeur.get("/eleve", Controller.Page_Eleves);
routeur.get("/ajout_eleve", Controller.Ajout_Eleves);

routeur.get("/", Controller.Affichage_Eleves)

module.exports = routeur