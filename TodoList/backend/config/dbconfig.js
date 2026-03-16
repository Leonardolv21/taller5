const {Sequelize} = require('sequelize');

const sequelize =new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})
sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida con éxito.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

module.exports = { sequelize, Sequelize };