const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,
        }
      },
      role: {
        type: DataTypes.ENUM,
        values: ['student', 'academic', 'administrator']
      },
      password: {
        type: DataTypes.STRING,
      },
    }, {
        timestamps: true,
        indexes: [{
            unique: true,
            fields: ['email']
          }]
    });
  
    User.associate = models => {
      User.belongsTo(models.Institution);
    };
  
    return User;
};

export default user;