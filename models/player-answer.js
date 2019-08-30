import Sequelize from 'sequelize';

class PlayerAnswer extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                correct: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                points: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
            },
            {
                sequelize
            }
        );
    }
}
