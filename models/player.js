'use strict';

import PlayerAnswer from './player-answer';

module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define('Player', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
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
        }, {
            timestamps: true,
        }
    );

    return Player;
};
