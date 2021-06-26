const { Model, DataTypes } = require("sequelize");

class Friends extends Model {
    static init(sequelize) {
        super.init(
            {
                status: DataTypes.ENUM("pending", "denied", "accepted"),
                friend_of: {
                    type: DataTypes.INTEGER,
                    references: { model: 'user', key: 'id' },
                },
            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.User, {
            as: "friendOf",
            foreignKey: "friend_of_id",
        });
        this.belongsTo(models.User, {
            as: "friend",
            foreignKey: "friend_id",
        });
    }
}

module.exports = Friends;
