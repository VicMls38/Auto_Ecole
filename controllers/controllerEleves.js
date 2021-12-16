//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
var db = require('../database');
//Importation du fichier models
var Model = require('../models/modelEleves');


module.exports = {



    // Fonction de connexion avec where //
    Affichage_Eleves : (req, res) => {     
        
       Model.Affichage_Eleves(function(lignes){
            res.render("./accueil", {index : lignes});
        });
        
    },
   
   

}