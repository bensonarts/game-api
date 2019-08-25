'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TriviaAnswers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      question: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      correct: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      totalChosen: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    }).then(() => queryInterface.addIndex(
        'TriviaAnswers',
        [
          'question',
        ],
        {
          name: 'triviaQuestionIdx',
        }
      )
    ).then(() => queryInterface.addConstraint(
        'TriviaAnswers',
        ['question'],
        {
          type: 'foreign key',
          name: 'triviaQuestionIdFk',
          references: {
            table: 'TriviaQuestions',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
    ))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TriviaAnswers');
  }
};
