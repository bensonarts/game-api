import Sequelize from 'sequelize';

class Player extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                username: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true,
                },
                lifetimePoints: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
                enabled: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: true,
                },
            },
            {
                sequelize
            }
        );
    }
}
