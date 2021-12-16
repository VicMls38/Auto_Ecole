//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
var db = require('../database');
//Importation du fichier models
var Model = require('../models/modelMoniteurs');


module.exports = {

    Page_Moniteurs : (req, res) => {     
        
        Model.Affichage_Moniteurs(function(lignes){
             console.log(lignes);
             res.render("./moniteur", {index : lignes});
         });
         
     },

     Ajout_Moniteurs : (req, res) => {     
          
        res.render("./ajout_moniteur");    
     },

     Register : (req, res) => {
        let nom = req.body.nom;
        let prenom = req.body.prenom;
        let date_naissance = req.body.date_naissance
  
        Model.Inscription_Moniteurs(nom, prenom, date_naissance)
        res.render("./moniteur")
    },
   
   

}