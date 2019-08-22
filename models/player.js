'use strict';
module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define('Player', {
            id: {
                type: Sequelize.INTEGER,
                field: 'id',
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            username: {
                type: Sequelize.STRING,
                field: 'username',
                allowNull: false,
                unique: true,
            },
            enabled: {
                type: Sequelize.BOOLEAN,
                field: 'enabled',
                allowNull: false,
                defaultValue: true,
            },
        }, {
            tableName: 'players',
            timestamps: true,
        }
    );

    return Player;
};
