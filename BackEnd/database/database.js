//Biblioteca Sequelize sendo importada e atribuída à uma constante
const Sequelize = require('sequelize');

const connection = new Sequelize(
    //Nome do banco de dados
    'bd_artme', 

    //Nome do usuário do banco de dados
    'root',

    //Senha do usuário do banco de dados (nada)
    '',
    {
        host:'localhost',
        port: '3306',
        dialect:'mysql',
        timezone: '-03:00',
        
    }
);

//Exportação do banco de dados
module.exports = connection;