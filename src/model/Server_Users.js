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
}

module.exports = ServersUsers;
