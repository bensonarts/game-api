'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('PlayerAnswers', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            player: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            question: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            answer: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            correct: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                type: Sequelize.DATE,
            },
        }).then(() => queryInterface.addIndex(
            'PlayerAnswers',
            [
                'player',
            ],
            {
                name: 'playerAnswerPlayerIdIdx',
            }
            )
        ).then(() => queryInterface.addIndex(
            'PlayerAnswers',
            [
                'question',
            ],
            {
                name: 'playerAnswerTriviaQuestionIdIdx',
            }
            )
        ).then(() => queryInterface.addIndex(
            'PlayerAnswers',
            [
                'answer',
            ],
            {
                name: 'playerAnswerTriviaAnswerIdIdx',
            }
            )
        ).then(() => queryInterface.addIndex(
            'PlayerAnswers',
            [
                'correct',
            ],
            {
                name: 'playerAnswerCorrectIdx',
            }
            )
        ).then(() => queryInterface.addConstraint(
            'PlayerAnswers',
            ['player'],
            {
                type: 'foreign key',
                name: 'playerAnswerPlayerIdFk',
                references: {
                    table: 'Players',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            }
        )).then(() => queryInterface.addConstraint(
            'PlayerAnswers',
            ['question'],
            {
                type: 'foreign key',
                name: 'playerAnswerQuestionIdFk',
                references: {
                    table: 'TriviaQuestions',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            }
        )).then(() => queryInterface.addConstraint(
            'PlayerAnswers',
            ['answer'],
            {
                type: 'foreign key',
                name: 'playerAnswerAnswerIdFk',
                references: {
                    table: 'TriviaAnswers',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            }
        ))
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('PlayerAnswers');
    }
};
