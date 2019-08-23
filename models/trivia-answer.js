'use strict';

import models from '../models';

module.exports = (sequelize, Sequelize) => {
    const TriviaAnswer = sequelize.define('TriviaAnswer', {
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
        }, {
            timestamps: true,
        }
    );

    return TriviaAnswer;
};
