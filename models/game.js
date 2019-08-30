import Sequelize from 'sequelize';
import sequelize from './sequelize-index';

class Game extends Sequelize.Model {}
Game.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize
});
