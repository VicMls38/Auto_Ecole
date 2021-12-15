//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
var db = require('../database');
//Importation du fichier models
var Model = require('../models/modelMoniteurs');


module.exports = {

    Affichage_Moniteurs : (req, res) => {     
        
        Model.Affichage_Moniteurs(function(lignes){
             console.log(lignes);
             res.render("./testAffichage", {index : lignes});
         });
         
     },
   

}