const { sequelize, Sequelize } = require('../config/dbconfig');
const db={};


db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Todo = require('./todo')(sequelize, Sequelize);

module.exports = db;