'use strict';

const book = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      isbn: {
        type: DataTypes.INTEGER,
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
  
    return Book;
};

module.exports = book;