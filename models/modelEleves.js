//Importation de la connexion à la bdd
const e = require('express');
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    Inscription_Eleves:function(nom, prenom, date_naissance){

        var sql="Insert Into eleve (Nom, Prenom, Date_Naissance) Values ('"+nom+"', '"+prenom+"', '"+date_naissance+"') ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) created");
          });

    },

    Affichage_Eleves:function(callback){

        var sql="SELECT Id, Nom, Prenom, DATE_FORMAT(Date_Naissance, '%d/%m/%Y') AS Date_Naissance  FROM eleve";
        db.query(sql, function (err, data, fields){
            if (err){throw err};
                return callback(data);
            
        });
    },

    Supprimer_Eleves:function(eleve_Id){

        console.log(eleve_Id)
        var sql="Delete From eleve where id = '"+eleve_Id+"'";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) deleted");
          });

    },


    Affichage_Modif_eleve:function(callback, eleve_Id){

        var sql="SELECT Id, Nom, Prenom, DATE_FORMAT(Date_Naissance, '%Y-%m-%d') AS Date_Naissance  FROM eleve where id= '"+eleve_Id+"'";
        db.query(sql, function (err, data, fields){
            if (err){throw err};
                console.log(data);
                return callback(data);
            
        });
    },

    Modifier_Eleve:function(eleve_Id, nom, prenom, date_naissance){

        console.log(eleve_Id, nom, prenom)
        var sql="Update eleve set nom = '"+nom+"', prenom = '"+prenom+"', Date_Naissance = '"+date_naissance+"' where id = '"+eleve_Id+"' ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
          });

    },

   

}