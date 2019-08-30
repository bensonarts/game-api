import Sequelize from 'sequelize';

class TriviaQuestion extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
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
            },
            {
                sequelize
            }
        );
    }
}
