//Biblioteca Sequelize sendo importada e atribuída à uma constante
const Sequelize = require('sequelize');

//Importação da conexão com banco de dados
const connection = require('../database/database');

//Criação da tabela Chat
const modelChat = connection.define(
    'tbl_chat',
    {
        Mensagem:{
            type: Sequelize.STRING(),
            primaryKey: true,
            autoIncrement:false
        },
        imagem:{
            type: Sequelize.STRING(),
            allowNull: false
        }
        
    }
);

//Forçar recriação da tabela
//modelChat.sync({force:true});

//Exportação da tabela Chat
module.exports = modelChat;