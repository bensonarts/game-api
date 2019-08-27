'use strict';
module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define('Game', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
        }, {
            timestamps: true,
        }
    );

    return Game;
};
