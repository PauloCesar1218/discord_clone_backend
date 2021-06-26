"use friendship_requestct";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const friendshipRequest = queryInterface.createTable("friendship_request", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            requested_by: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "users", key: "id" },
            },
            requested_to: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "users", key: "id" },
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM("pending", "denied", "accepted"),
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

        return friendshipRequest;
    },

    down: async (queryInterface, Sequelize) => queryInterface.dropTable("friendship_request"),
};
