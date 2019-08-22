'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('players', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
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
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('players');
  }
};
