'use strict';

import TriviaAnswer from './trivia-answer';

module.exports = (sequelize, Sequelize) => {
    const TriviaQuestion = sequelize.define('TriviaQuestion', {
            id: {
                type: Sequelize.INTEGER,
                field: 'id',
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            category: {
                type: Sequelize.STRING,
                field: 'category',
                allowNull: false,
                unique: 'category_question_idx',
            },
            question: {
                type: Sequelize.STRING,
                field: 'question',
                allowNull: false,
                unique: 'category_question_idx',
            },
            enabled: {
                type: Sequelize.BOOLEAN,
                field: 'enabled',
                defaultValue: true,
            },
        }, {
            timestamps: true,
        }
    );

    // TriviaQuestion.hasMany(TriviaAnswer);

    return TriviaQuestion;
};
