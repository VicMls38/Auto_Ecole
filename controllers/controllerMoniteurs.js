//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
var db = require('../database');
//Importation du fichier models
var Model = require('../models/modelMoniteurs');


module.exports = {

    Page_Moniteurs : (req, res) => {     
        
        Model.Affichage_Moniteurs(function(lignes){
             res.render("./moniteur", {index : lignes});
         });
         
     },

     Ajout_Moniteurs : (req, res) => {     
          
        res.render("./ajout_moniteur");    
     },

     Register : (req, res) => {
        let nom = req.body.nom;
        let prenom = req.body.prenom;
  
        Model.Inscription_Moniteurs(nom, prenom)
        Model.Affichage_Moniteurs(function(lignes){
            res.render("./moniteur", {index : lignes});
        });
    },

    Supprimer_Moniteur : (req, res) => {
        let moniteur_Id = req.query['id'];
  
        Model.Supprimer_Moniteur(moniteur_Id)
        Model.Affichage_Moniteurs(function(lignes){
            res.render("./moniteur", {index : lignes});
        });
    },

    Page_Modifier_Moniteur : (req, res) => {     
        let moniteur_Id = req.query['id'];
        Model.Affichage_Modif_moniteur(function(lignes){
            res.render("./modif_moniteur", {index : lignes});
        }, moniteur_Id);
          
     },

    Modifier_Moniteur : (req, res) => {
        let moniteur_Id = req.body.id
        let nom = req.body.nom;
        let prenom = req.body.prenom;
  
        console.log(moniteur_Id)
        Model.Modifier_Moniteur(moniteur_Id, nom, prenom)
        Model.Affichage_Moniteurs(function(lignes){
            res.render("./moniteur", {index : lignes});
        });
    },
   
   

}