const uuid = require('uuidv4');

const book = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuid()
      },
      isbn: {
        type: DataTypes.STRING,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
    }, {
        timestamps: true,
    });
  
    Book.associate = models => {
        Book.belongsToMany(models.Institution, {through: 'InstitutionBooks'});
    };
  
    return Book;
};

module.exports = book;