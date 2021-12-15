// inclure les dépendances et middlewares 

const express = require('express') 
const ejs = require('ejs')
const mysql = require('mysql')
const iniparser = require('iniparser')
const http = require('http')
const https = require('https')  
const path = require('path')  
const fs = require('fs')

/* 
AJOUTER ROUTES !*/
const Routeur = require('./routes/routeDefaut')



// activation des dépendances 
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', Routeur);

// Définition du port de l'application  
const port = 3000


/* partie test pour capture non chiffrée Wireshark. */
app.listen(port, () => {
    console.log(`Serveur HTTP fonctionnel. Go http://localhost:${port}`)
  })




module.exports = app
