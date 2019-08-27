'use strict';

import TriviaQuestion from './trivia-question';

module.exports = (sequelize, Sequelize) => {
    const TriviaAnswer = sequelize.define('TriviaAnswer', {
            id: {
                type: Sequelize.INTEGER,
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
                }
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
        }, {
            timestamps: true,
        }
    );

    // TriviaAnswer.belongsTo(TriviaQuestion);

    return TriviaAnswer;
};
