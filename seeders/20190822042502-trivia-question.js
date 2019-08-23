'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('TriviaQuestions', [{
          category: 'science',
          question: 'How many miles are between the sun and the Earth?', // 92.96 million mi
          createdAt: new Date(),
          updatedAt: new Date(),
      }, {
          category: 'science',
          question: 'What is 2+2?',
          createdAt: new Date(),
          updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('TriviaQuestions', null, {});
  }
};
