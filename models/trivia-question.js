'use strict';

import TriviaAnswer from './trivia-answer';

module.exports = (sequelize, Sequelize) => {
    const TriviaQuestion = sequelize.define('TriviaQuestion', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            category: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: 'category_question_idx',
            },
            question: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: 'category_question_idx',
            },
            totalCorrect: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            totalWrong: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            points: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            enabled: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
        }, {
            timestamps: true,
        }
    );

    // TriviaQuestion.hasMany(TriviaAnswer);

    return TriviaQuestion;
};
