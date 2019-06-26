const uuid = require('uuidv4');

const institution = (sequelize, DataTypes) => {
  const Institution = sequelize.define('institution', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuid()
    },
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
      indexes: [{
        unique: true,
        fields: ['domain']
      }]
    });

  Institution.associate = models => {
    Institution.belongsToMany(models.Book, { through: 'InstitutionBooks' });
  };

  return Institution;
};

module.exports = institution;