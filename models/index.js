const Sequelize = require('sequelize');
const { db } = require('../config');

let sequelize;

if (db.url) {
    sequelize = new Sequelize(db.url);
} else {
    sequelize = new Sequelize(db.database, db.name, db.password, {
        host: db.host,
        dialect: 'postgres'
      });   
}

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
});

module.exports = {
    sequelize
}