import Sequelize from 'sequelize';

class TriviaAnswer extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
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
            },
            {
                sequelize
            }
        );
    }
}
