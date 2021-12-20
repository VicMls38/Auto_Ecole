const express = require('express');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Controller = require('../controllers/controllerEleves');

const routeur = express.Router();

routeur.post("/register_e", urlencodedParser, Controller.Register);
routeur.get("/eleve", Controller.Page_Eleves);
routeur.get("/ajout_eleve", Controller.Ajout_Eleves);
routeur.get("/supprimer_e", Controller.Supprimer_Eleves);

routeur.get("/modif_eleve", Controller.Page_Modifier_Eleve)
routeur.post("/modifier_e",urlencodedParser , Controller.Modifier_Eleve)

//routeur.get("/", Controller.Affichage_Eleves)

module.exports = routeur