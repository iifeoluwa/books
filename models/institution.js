'use strict';

const institution = (sequelize, DataTypes) => {
  const Institution = sequelize.define('institution', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
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
    Institution.hasMany(models.Book);
  };

  return Institution;
};

module.exports = institution;