'use strict';
module.exports = (sequelize, Sequelize) => {
    const TriviaQuestion = sequelize.define('TriviaQuestion', {
            id: {
                type: Sequelize.INTEGER,
                field: 'id',
                primaryKey: true,
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
            tableName: 'trivia_questions',
            timestamps: true,
        }
    );

    return TriviaQuestion;
};
