"use friendship_requestct";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const friends = queryInterface.createTable("friends", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            friend_of: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "users", key: "id" },
            },
            friend: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "users", key: "id" },
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
        });

        return friends;
    },

    down: async (queryInterface, Sequelize) => queryInterface.dropTable("friends"),
};
