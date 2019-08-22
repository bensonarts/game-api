'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('trivia_questions', [{
        category: 'science',
        question: 'How many miles between the sun and the Earth?', // 92.96 million mi
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('trivia_questions', null, {});
  }
};
