const express = require('express');
const Controller = require('../controllers/controllerPlanning');

const routeur = express.Router();

routeur.get("/", Controller.Affichage_Planning)

module.exports = routeur