"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const ServerTable = queryInterface.createTable("servers", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
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

        return ServerTable;
    },

    down: async (queryInterface, Sequelize) => queryInterface.dropTable("server"),
};
