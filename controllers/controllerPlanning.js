//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
var db = require('../database');
//Importation du fichier models
var Model = require('../models/modelPlanning');
var ModelEleves = require('../models/modelEleves');


module.exports = {

   
    Affichage_Planning : (req, res) => {     
        Model.Affichage_Planning(function(lignes_p){
            console.log(lignes_p)
        

        ModelEleves.Affichage_Eleves(function(lignes_e){
           
            res.render("./accueil", {index_e : lignes_e, index_p : lignes_p});
        });
        });
     },

}