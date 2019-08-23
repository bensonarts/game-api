'use strict';

import Player from './player';
import TriviaAnswer from './trivia-answer';
import TriviaQuestion from './trivia-question';

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
                    model: TriviaQuestion,
                    key: 'id',
                    field: 'trivia_question_id',
                }
            },
            answer: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: TriviaAnswer,
                    key: 'id',
                    field: 'trivia_answer_id',
                }
            },
            player: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: Player,
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
