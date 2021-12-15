const express = require('express');
const Controller = require('../controllers/controllerEleves');

const routeur = express.Router();

routeur.get("/testAffichage", Controller.Affichage_Eleves);
routeur.get("/", Controller.Affichage_Eleves)

module.exports = routeur