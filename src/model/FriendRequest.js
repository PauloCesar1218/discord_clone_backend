const { Model, DataTypes } = require('sequelize');

class FriendRequest extends Model {
  static init(sequelize) {
    super.init({
      status: DataTypes.ENUM("pending", "denied", "accepted"),
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, {as: "requestedBy", foreignKey: "requested_by"});
    this.belongsTo(models.User, {as: "requestedTo", foreignKey: "requested_to"});
  }
}

module.exports = FriendRequest;