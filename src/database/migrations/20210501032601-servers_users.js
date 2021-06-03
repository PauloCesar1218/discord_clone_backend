"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const serverUsersTable = queryInterface.createTable("servers_users", {
            id_user: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            id_server: {
                allowNull: false,
                type: Sequelize.INTEGER,
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

        return serverUsersTable;
    },

    down: async (queryInterface, Sequelize) => queryInterface.dropTable("servers_users")
};
