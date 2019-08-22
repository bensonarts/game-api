'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('trivia_answers', [{
        trivia_question_id: 1,
        answer: '86.8 million mi',
        correct: false,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        trivia_question_id: 1,
        answer: '92.96 million mi',
        correct: true,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        trivia_question_id: 1,
        answer: '1 light year',
        correct: false,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        trivia_question_id: 1,
        answer: '500 thousand miles',
        correct: false,
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('trivia_answers', null, {});
  }
};
