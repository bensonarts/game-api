'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trivia_answers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
      },
      question: {
        type: Sequelize.INTEGER,
        field: 'trivia_question_id',
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING,
        field: 'answer',
        allowNull: false,
      },
      correct: {
        type: Sequelize.BOOLEAN,
        field: 'correct',
        allowNull: false,
        defaultValue: false,
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
        'trivia_answers',
        [
          'trivia_question_id',
        ],
        {
          name: 'trivia_question_idx',
        }
      )
    ).then(() => queryInterface.addConstraint(
        'trivia_answers',
        ['trivia_question_id'],
        {
          type: 'foreign key',
          name: 'trivia_question_id_fk',
          references: {
            table: 'trivia_questions',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
    ))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trivia_answers');
  }
};
