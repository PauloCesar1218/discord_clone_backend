"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const serverUsersTable = queryInterface.createTable("server_messages", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_user: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            id_server: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            content: {
                allowNull: false,
                type: Sequelize.STRING,
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

    down: async (queryInterface, Sequelize) => queryInterface.dropTable("server_messages")
};
