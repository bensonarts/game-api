'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Players', [{
      username: 'joblaster',
      createdAt: new Date(),
      updatedAt: new Date(),
      lifetimePoints: 112,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Players', null, {});
  }
};
