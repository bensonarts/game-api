'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('TriviaQuestions', [{
          category: 'science',
          question: 'How many miles are between the sun and the Earth?', // 92.96 million mi
          totalCorrect: 512,
          totalWrong: 236,
          points: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
      }, {
          category: 'science',
          question: 'What is 2+2?',
          totalCorrect: 773,
          totalWrong: 5,
          points: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('TriviaQuestions', null, {});
  }
};
