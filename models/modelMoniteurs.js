//Importation de la connexion à la bdd
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    Affichage_Moniteurs:function(callback){

        var sql="SELECT Id, Nom, Prenom  FROM moniteur";
        db.query(sql, function (err, data, fields){
            if (err){throw err};
                console.log(data);
                return callback(data);
            
        });
    },

    Inscription_Moniteurs:function(nom, prenom){

        var sql="Insert Into moniteur (Nom, Prenom) Values ('"+nom+"', '"+prenom+"') ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) created");
          });

    },
   
    Supprimer_Moniteur:function(moniteur_Id){

        console.log(moniteur_Id)
        var sql="Delete FROM moniteur WHERE id ='"+moniteur_Id+"' ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) Deleted");
            
        });
    },


    Affichage_Modif_moniteur:function(callback, moniteur_Id){

        var sql="SELECT Id, Nom, Prenom  FROM moniteur where id= '"+moniteur_Id+"'";
        db.query(sql, function (err, data, fields){
            if (err){throw err};
                console.log(data);
                return callback(data);
            
        });
    },

    Modifier_Moniteur:function(moniteur_Id, nom, prenom){

        console.log(moniteur_Id, nom, prenom)
        var sql="Update moniteur set nom = '"+nom+"', prenom = '"+prenom+"' where id = '"+moniteur_Id+"' ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
          });

    },
   

}