//Biblioteca Sequelize sendo importada e atribuída à uma constante
const Sequelize = require('sequelize');

//Importação da conexão com banco de dados
const connection = require('../database/database');

//Criação da tabela Serviço
const modelPost = connection.define(
    'tbl_post',
    {
        titulo:{
            type: Sequelize.STRING(30),
            primaryKey: true,
        },
        desc_postagem:{
            type: Sequelize.STRING(150),
            allowNull: false
        }
        
    }
);

//Forçar recriação da tabela
//modelPost.sync({force:true});

//Exportação da tabela Serviço
module.exports = modelPost;