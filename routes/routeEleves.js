const express = require('express');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Controller = require('../controllers/controllerEleves');

const routeur = express.Router();

routeur.post("/register", urlencodedParser, Controller.Register);
routeur.get("/eleve", Controller.Page_Eleves);
routeur.get("/ajout_eleve", Controller.Ajout_Eleves);

routeur.get("/", Controller.Affichage_Eleves)

module.exports = routeur