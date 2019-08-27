'use strict';

import Game from './game';
import Player from './player';

module.exports = (sequelize, Sequelize) => {
    const Leaderboard = sequelize.define('Leaderboard', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            game: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: Game,
                    key: 'id',
                }
            },
            player: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: Player,
                    key: 'id',
                }
            },
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
        }, {
            indexes: [
                {
                    name: 'score_time_period_idx',
                    unique: false,
                    fields: [
                        'score',
                        'timePeriod',
                        'timePeriodFrom',
                    ]
                }
            ]
        }, {
            timestamps: true,
        }
    );

    return Leaderboard;
};
