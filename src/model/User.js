const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Server, { foreignKey: 'id_user', through: 'servers_users', as: 'Server' });
    this.belongsToMany(models.Server, { foreignKey: 'id_user', through: 'server_messages', as: 'Server_Messages' });
  }
}

module.exports = User;