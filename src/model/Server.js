const { Model, DataTypes } = require('sequelize');

class Server extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'id_server', through: 'servers_users', as: 'User' });
    this.belongsToMany(models.User, { foreignKey: 'id_server', through: 'server_messages', as: 'User_Messages' });
  }
}

module.exports = Server;