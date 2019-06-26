const institution = (sequelize, DataTypes) => {
    const Institution = sequelize.define('institution', {
      name: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isUrl: true,
        }
      },
      domain: {
        type: DataTypes.STRING,
      },
    }, {
        timestamps: true,
    });
  
    Institution.associate = models => {
        Institution.belongsToMany(models.Book, {through: 'InstitutionBooks'});
    };
  
    return Institution;
};

export default institution;