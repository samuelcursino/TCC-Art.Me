//Biblioteca Sequelize sendo importada e atribuída à uma constante
const Sequelize = require('sequelize');

//Importação da conexão com banco de dados
const connection = require('../database/database');
const modelUsuario = require('./modelUsuario');

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

//Implementação da  CHAVE ESTRANGEIRA - LADO N
modelUsuario.hasMany(modelPost);

//Implementação da  CHAVE PRIMÁRIA - LADO 1
 modelPost.belongsTo(modelUsuario);

//Forçar recriação da tabela
//modelPost.sync({force:true});

//Exportação da tabela Serviço
module.exports = modelPost;