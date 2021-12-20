const express = require('express');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Controller = require('../controllers/controllerMoniteurs');

const routeur = express.Router();


//routeur.get("/accueil", Controller.Affichage_Moniteurs)
routeur.get("/moniteur", Controller.Page_Moniteurs)
routeur.get("/ajout_moniteur", Controller.Ajout_Moniteurs)
routeur.post("/register_m",urlencodedParser , Controller.Register)
routeur.get("/supprimer_m",urlencodedParser , Controller.Supprimer_Moniteur)

routeur.get("/modifier_moniteur", Controller.Page_Modifier_Moniteur)
routeur.post("/modifier_m",urlencodedParser , Controller.Modifier_Moniteur)

module.exports = routeur