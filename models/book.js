const book = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
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

export default book;