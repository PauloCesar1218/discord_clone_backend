const { Model, DataTypes } = require('sequelize');

class Message extends Model {
  static init(sequelize) {
    super.init({
      content: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, {as: "userMessage", foreignKey: "user_id"});
    this.belongsTo(models.Server, {as: "serverMessages", foreignKey: "server_id"});
  }
}

module.exports = Message;