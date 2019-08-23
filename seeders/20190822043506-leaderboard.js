'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Leaderboards', [{
        player: 1,
        game: 1,
        score: 100,
        timePeriodFrom: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Leaderboards', null, {});
  }
};
