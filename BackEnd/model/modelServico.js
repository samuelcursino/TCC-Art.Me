//Biblioteca Sequelize sendo importada e atribuída à uma constante
const Sequelize = require('sequelize');

//Importação da conexão com banco de dados
const connection = require('../database/database');

//Criação da tabela Serviço
const modelServico = connection.define(
    'tbl_servico',
    {
        id_servico:{
            type: Sequelize.INTEGER(20),
            primaryKey: true,
            autoIncrement:true
        },
        desc_servico:{
            type: Sequelize.STRING(45),
            allowNull: false
        }
        
    }
);

//Forçar recriação da tabela
//modelServico.sync({force:true});

//Exportação da tabela Serviço
module.exports = modelServico;