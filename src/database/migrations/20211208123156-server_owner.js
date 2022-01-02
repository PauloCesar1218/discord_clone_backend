'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('servers', 'server_owner', {
      type: Sequelize.INTEGER,
      alllowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('servers', 'server_owner')
  }
};
