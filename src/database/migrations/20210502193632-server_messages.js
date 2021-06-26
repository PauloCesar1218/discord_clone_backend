"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const messages = queryInterface.createTable("messages", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_user: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
            },
            id_server: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'servers', key: 'id' },
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

        return messages;
    },

    down: async (queryInterface, Sequelize) => queryInterface.dropTable("messages")
};
