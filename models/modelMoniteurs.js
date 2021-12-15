//Importation de la connexion à la bdd
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    Affichage_Moniteurs:function(callback){

        var sql="SELECT Nom, Prenom  FROM moniteur";
        db.query(sql, function (err, data, fields){
            if (err){throw err};
                console.log(data);
                return callback(data);
            
        });
    }
   

}