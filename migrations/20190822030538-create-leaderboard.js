'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('leaderboards', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
      },
      game: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'game_id',
      },
      player: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'player_id',
      },
      score: {
        type: Sequelize.INTEGER,
        field: 'score',
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
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    }).then(() => queryInterface.addIndex(
        'leaderboards',
        [
          'score',
          'time_period',
          'time_period_from',
        ],
        {
          name: 'score_time_period_idx',
        }
      )
    ).then(() => queryInterface.addIndex(
        'leaderboards',
        [
          'game_id',
        ],
        {
          name: 'game_idx',
        }
      )
    ).then(() => queryInterface.addIndex(
        'leaderboards',
        [
          'player_id',
        ],
        {
          name: 'player_idx',
        }
      )
    ).then(() => queryInterface.addConstraint(
        'leaderboards',
        ['game_id'],
        {
          type: 'foreign key',
          name: 'game_id_fk',
          references: {
            table: 'games',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
    )).then(() => queryInterface.addConstraint(
        'leaderboards',
        ['player_id'],
        {
          type: 'foreign key',
          name: 'player_id_fk',
          references: {
            table: 'players',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
    ))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games');
  }
};
