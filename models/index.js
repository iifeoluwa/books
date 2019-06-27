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

const models = {
  User: sequelize.import('./user'),
  Book: sequelize.import('./book'),
  Institution: sequelize.import('./institution'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

const createInitialInstitution = async () => {
  const harvard = await models.Institution.create({
    name: 'Harvard University',
    url: 'https://www.harvard.edu/',
    domain: 'harvard.edu',
    books: [
      {isbn: 1457309289, title: 'The Official Sat Study Guide, 2018 Edition', author: 'College Board'},
      {isbn: 345816021, title: '12 Rules For Life: An Antidote To Chaos', author: 'Jordan B. Peterson'}
    ]
  }, {
    include: models.Book
  });

  harvard.addBooks();
}

module.exports = {
  sequelize,
  User: models.User,
  Book: models.Book,
  Institution: models.Institution,
  createInitialInstitution
}