//Biblioteca Sequelize sendo importada e atribuída à uma constante
const Sequelize = require('sequelize');

//Importação da conexão com banco de dados
const connection = require('../database/database');
const modelCategoriaServico = require('./modelCategoriaServico');

//Criação da tabela Usuario
const modelUsuario = connection.define(
    'tbl_usuario',
    {

        id_usuario:{
            type: Sequelize.INTEGER(),
            primaryKey: true,
            autoIncrement:true
        },
        nome:{
            type: Sequelize.STRING(50),
            autoIncrement:false
        },
        sobrenome:{
            type: Sequelize.STRING(50),
            autoIncrement:false
        },
        email:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        password:{
            type: Sequelize.STRING(20),
            allowNull: false
        },        
        telefone:{
            type: Sequelize.STRING(14),
            allowNull: false
        },
        uf:{
            type: Sequelize.STRING(2),
            allowNull: false
        },   

    }
);

//Implementação da  CHAVE ESTRANGEIRA - LADO N
 modelCategoriaServico.hasMany(modelUsuario);

//Implementação da  CHAVE PRIMÁRIA - LADO 1
 modelUsuario.belongsTo(modelCategoriaServico);

//Forçar recriação da tabela
//modelUsuario.sync({force:true});

//Exportação da tabela Usuario
module.exports = modelUsuario;