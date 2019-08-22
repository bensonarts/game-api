'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('leaderboards', [{
        player_id: 1,
        game_id: 1,
        score: 100,
        time_period_from: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('leaderboards', null, {});
  }
};
