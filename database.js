//Importaion du module mysql et iniparser
const mysql = require('mysql')
const iniparser = require('iniparser')

//Convertion du fichier DB.ini en objet javascript
let configDB = iniparser.parseSync('./DB.ini')

//Création de la connexion à la bdd
let mysqlconnexion = mysql.createConnection({
    host:configDB['auto_ecole']['HOST'],
    user:configDB['auto_ecole']['USER'],
    password:configDB['auto_ecole']['PASSWORD'],
    database:configDB['auto_ecole']['DATABASE'],
    port:configDB['auto_ecole']['port']
   })
   mysqlconnexion.connect((err) => {
    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
   })

//Exportation du module de connexion à la bdd
module.exports = mysqlconnexion;