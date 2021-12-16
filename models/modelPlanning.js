//Importation de la connexion à la bdd
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    Affichage_Planning:function(callback){

        var sql="SELECT *, DATE_FORMAT(date, '%d/%m/%Y') AS date  FROM planning";
        db.query(sql, function (err, data, fields){
            console.log(data);
            if (err){throw err};
            return callback(data);
            
        });
    }


}