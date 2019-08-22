'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trivia_questions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
      },
      category: {
        type: Sequelize.STRING,
        field: 'category',
        allowNull: false,
      },
      question: {
        type: Sequelize.STRING,
        field: 'question',
        allowNull: false,
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        field: 'enabled',
        defaultValue: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    }).then(() => queryInterface.addIndex(
        'trivia_questions',
        [
          'category',
          'question',
        ],
        {
          name: 'category_question_idx',
          unique: true,
        }
      )
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trivia_questions');
  }
};
