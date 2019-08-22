'use strict';
module.exports = (sequelize, Sequelize) => {
    const Leaderboard = sequelize.define('Leaderboard', {
            id: {
                type: Sequelize.INTEGER,
                field: 'id',
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
                    field: 'game_id',
                }
            },
            player: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: Player,
                    key: 'id',
                    field: 'player_id',
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
                field: 'time_period',
            },
            timePeriodFrom: {
                type: Sequelize.DATE,
                allowNull: false,
                field: 'time_period_from',
            },
        }, {
            indexes: [
                {
                    name: 'score_time_period_idx',
                    unique: false,
                    fields: [
                        'score',
                        'time_period',
                        'time_period_from',
                    ]
                }
            ]
        }, {
            tableName: 'leaderboards',
            timestamps: true,
        }
    );

    return Leaderboard;
};
