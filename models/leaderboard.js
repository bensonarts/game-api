import Sequelize from 'sequelize';

class Leaderboard extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                score: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
                timePeriod: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
                timePeriodFrom: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
            },
            {
                sequelize
            }
        );
    }
}
