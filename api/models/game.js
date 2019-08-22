'use strict';
module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define('Game', {
            id: {
                type: Sequelize.INTEGER,
                field: 'id',
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                field: 'name',
                allowNull: false,
                unique: true,
            },
        }, {
            tableName: 'games',
            timestamps: true,
        }
    );

    return Game;
};
