//Express e cors sendo importado e atribuído a uma constante
const express = require('express');
const cors = require("cors");

//Importação das rotas de Categoria Serviço
const rotasCategoriaServico = require('./route/routeCategoriaServico');

//Importação das rotas de Chat
const rotasChat = require('./route/routeChat');

//Importação das rotas de Serviço
const rotasPost = require('./route/routePost');

//Importação das rotas de Usuario
const rotasUsuario = require('./route/routeUsuario');


const app = express();
app.use(express.json());
app.use(cors());

app.use('/', rotasCategoriaServico);
app.use('/', rotasUsuario);
app.use('/', rotasPost);
app.use('/', rotasChat);

app.listen(3005, ()=>{
    console.log('Servidor na porta 3005 - http://localhost:3005');
});