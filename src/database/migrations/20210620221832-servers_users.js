"use friendship_requestct";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const serversUsers = queryInterface.createTable("servers_users", {
            user_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: { model: "users", key: "id" },
            },
            server_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: { model: "servers", key: "id" },
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

        return serversUsers;
    },

    down: async (queryInterface, Sequelize) =>
        queryInterface.dropTable("servers_users"),
};
