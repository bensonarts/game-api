'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TriviaQuestions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    }).then(() => queryInterface.addIndex(
        'TriviaQuestions',
        [
          'category',
          'question',
        ],
        {
          name: 'categoryQuestionIdx',
          unique: true,
        }
      )
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TriviaQuestions');
  }
};
