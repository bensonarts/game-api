'use strict';

import TriviaQuestion from './trivia-question';

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
                    model: TriviaQuestion,
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
            totalChosen: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
        }, {
            timestamps: true,
        }
    );

    // TriviaAnswer.belongsTo(TriviaQuestion);

    return TriviaAnswer;
};
