//Importation de la connexion à la bdd
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    Inscription_Eleves:function(nom, prenom, date_naissance){

        var sql="Insert Into elevee (Nom, Prenom, Date_Naissance) Values ('"+nom+"', '"+prenom+"', '"+date_naissance+"') ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) created");
          });

    },

    Affichage_Eleves:function(callback){

        var sql="SELECT Nom, Prenom, DATE_FORMAT(Date_Naissance, '%d/%m/%Y') FROM eleve";
        db.query(sql, function (err, data, fields){
            if (err){throw err};
                console.log(data);
                return callback(data);
            
        });
    }

   

}