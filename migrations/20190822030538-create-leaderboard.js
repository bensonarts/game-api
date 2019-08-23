'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Leaderboards', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      game: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      player: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    }).then(() => queryInterface.addIndex(
        'Leaderboards',
        [
          'score',
          'timePeriod',
          'timePeriodFrom',
        ],
        {
          name: 'scoreTimePeriodIdx',
        }
      )
    ).then(() => queryInterface.addIndex(
        'Leaderboards',
        [
          'game',
        ],
        {
          name: 'gameIdx',
        }
      )
    ).then(() => queryInterface.addIndex(
        'Leaderboards',
        [
          'player',
        ],
        {
          name: 'playerIdx',
        }
      )
    ).then(() => queryInterface.addConstraint(
        'Leaderboards',
        ['game'],
        {
          type: 'foreign key',
          name: 'gameIdFk',
          references: {
            table: 'Games',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
    )).then(() => queryInterface.addConstraint(
        'Leaderboards',
        ['player'],
        {
          type: 'foreign key',
          name: 'playerIdFk',
          references: {
            table: 'Players',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        }
    ))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Leaderboardss');
  }
};
