//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
var db = require('../database');
//Importation du fichier models
var Model = require('../models/modelEleves');


module.exports = {



    // Fonction de connexion avec where //
    Page_Eleves : (req, res) => {     
        Model.Affichage_Eleves(function(lignes){
            res.render("./eleve", {index : lignes});
        });
       
         
     },

    Affichage_Eleves : (req, res) => {     
        
       Model.Affichage_Eleves(function(lignes){
            res.render("./accueil", {index_e : lignes});
        });
        
    },
    Ajout_Eleves : (req, res) => {     
        
        Model.Affichage_Eleves(function(lignes){
             res.render("./ajout_eleve");
         });
         
     },

    Register : (req, res) => {
        let nom = req.body.nom;
        let prenom = req.body.prenom;
        let date_naissance = req.body.date_naissance
        console.log(nom, prenom, date_naissance)

        Model.Inscription_Eleves(nom, prenom, date_naissance)
        Model.Affichage_Eleves(function(lignes){
            res.render("./eleve", {index : lignes});
        });
    },

    Supprimer_Eleves : (req, res) => {     
        let eleve_Id = req.query['id'];
        console.log(eleve_Id)
        Model.Supprimer_Eleves(eleve_Id)
            Model.Affichage_Eleves(function(lignes){
                res.render("./eleve", {index : lignes});
            });
         
     },

     Page_Modifier_Eleve : (req, res) => {     
        let eleve_Id = req.query['id'];
        Model.Affichage_Modif_eleve(function(lignes){
            res.render("./modif_eleve", {index : lignes});
        }, eleve_Id);
          
     },

    Modifier_Eleve : (req, res) => {
        let eleve_Id = req.body.id
        let nom = req.body.nom;
        let prenom = req.body.prenom;
        let date_naissance = req.body.date_naissance;
  
        console.log(eleve_Id)
        Model.Modifier_Eleve(eleve_Id, nom, prenom, date_naissance)
        Model.Affichage_Eleves(function(lignes){
            res.render("./eleve", {index : lignes});
        });
    },
   
   

}