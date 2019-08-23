'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('PlayerAnswers', [{
            player: 1,
            question: 1,
            answer: 2,
            correct: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('PlayerAnswers', null, {});
    }
};
