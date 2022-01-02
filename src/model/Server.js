const { Model, DataTypes } = require('sequelize');
const ServersUsers = require('./Server_Users')

class Server extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      server_owner: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Message, {as: "serverMessages", foreignKey: "server_id"})
    this.belongsToMany(models.User, {through: ServersUsers, uniqueKey: 'server_id'})
  }
}

module.exports = Server;