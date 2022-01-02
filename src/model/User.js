const { Model, DataTypes } = require('sequelize');
const ServersUsers = require('./Server_Users')

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
    this.hasMany(models.Message, {as: "userMessage", foreignKey: "user_id"})
    this.belongsToMany(models.Server, {through: ServersUsers, uniqueKey: 'user_id'})
    this.hasMany(models.ServersUsers, {as: "UserServers"})
  }
}

module.exports = User;