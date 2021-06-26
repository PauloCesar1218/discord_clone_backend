const { Model, DataTypes } = require("sequelize");

class ServersUsers extends Model {
    static init(sequelize) {
        super.init(
            {
                server_id: DataTypes.INTEGER,
                user_id: DataTypes.INTEGER,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        models.User.belongsToMany(models.Server, {through: ServersUsers, uniqueKey: 'server_id'})
        models.Server.belongsToMany(models.User, {through: ServersUsers, uniqueKey: 'user_id'})
    }
}

module.exports = ServersUsers;
