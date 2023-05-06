//Biblioteca Sequelize sendo importada e atribuída à uma constante
const Sequelize = require('sequelize');

//Importação da conexão com banco de dados
const connection = require('../database/database');

//Criação da tabela CategoriaServiço
const modelCategoriaServico = connection.define(
    'cat_servico',
    {
        id_Categoria:{
            type: Sequelize.INTEGER(),
            primaryKey: true,
            autoIncrement:true
        },
        nome_categoria:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
        
    }
);

//Forçar recriação da tabela
//modelCategoriaServico.sync({force:true});

//Exportação da tabela CategoriaServiço
module.exports = modelCategoriaServico;