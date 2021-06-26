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
    this.hasMany(models.Message, {as: "serverMessages", foreignKey: "server_id"})
  }
}

module.exports = Server;