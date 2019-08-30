import sequelize from './sequelize-index';
import Game from './game';
import Leaderboard from './leaderboard';
import Player from './player';
import PlayerAnswer from './player-answer';
import TriviaAnswer from './trivia-answer';
import TriviaQuestion from './trivia-question';

Game.hasMany(TriviaQuestion);
TriviaAnswer.belongsTo(TriviaQuestion);
Leaderboard.belongsTo(Game);
Leaderboard.belongsTo(Player);
Player.hasMany(PlayerAnswer);
PlayerAnswer.belongsTo(Player);
PlayerAnswer.belongsTo(TriviaQuestion);
PlayerAnswer.belongsTo(TriviaAnswer);
TriviaQuestion.hasMany(TriviaAnswer);

module.exports = {Game, LeaderBoard, Player, PlayerAnswer, TriviaAnswer, TriviaQuestion};
