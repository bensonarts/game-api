'use strict';

import models from '../models';

module.exports = (sequelize, Sequelize) => {
    const PlayerAnswer = sequelize.define('PlayerAnswer', {
            id: {
                type: Sequelize.INTEGER,
                field: 'id',
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            question: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: models.TriviaQuestion,
                    key: 'id',
                    field: 'trivia_question_id',
                }
            },
            answer: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: models.TriviaAnswer,
                    key: 'id',
                    field: 'trivia_answer_id',
                }
            },
            player: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: models.player,
                    key: 'id',
                    field: 'player_id',
                }
            },
            correct: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                field: 'correct',
            },
        }, {
            indexes: [
                {
                    name: 'player_answer_correct_idx',
                    unique: false,
                    fields: [
                        'correct',
                    ]
                }
            ]
        }, {
            timestamps: true,
        }
    );

    return PlayerAnswer;
};
