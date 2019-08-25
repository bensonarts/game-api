'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('TriviaAnswers', [{
          question: 1,
          answer: '86.8 million mi',
          correct: false,
          totalChosen: 122,
          createdAt: new Date(),
          updatedAt: new Date(),
      }, {
          question: 1,
          answer: '92.96 million mi',
          correct: true,
          totalChosen: 312,
          createdAt: new Date(),
          updatedAt: new Date(),
      }, {
          question: 1,
          answer: '1 light year',
          correct: false,
          totalChosen: 223,
          createdAt: new Date(),
          updatedAt: new Date(),
      }, {
          question: 1,
          answer: '500 thousand miles',
          correct: false,
          totalChosen: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
      }, {
          question: 2,
          answer: '3',
          correct: false,
          totalChosen: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
      }, {
          question: 2,
          answer: '2',
          correct: false,
          totalChosen: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
      }, {
          question: 2,
          answer: '4',
          correct: true,
          totalChosen: 712,
          createdAt: new Date(),
          updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('TriviaAnswers', null, {});
  }
};
