// importar dependência
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// Iniciando o express
const server = express()
server
// Utilizar body do request
    .use(express.urlencoded({ extended: true }))
    // utilizando os arquivos estáticos
    .use(express.static('public'))

// configurar templates engane
.set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

// Rota da aplicação
.get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// Ligar um Servidor
server.listen(5500)