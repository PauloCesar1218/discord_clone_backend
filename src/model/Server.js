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
  }
}

module.exports = Server;