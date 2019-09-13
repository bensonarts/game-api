import Router from 'express';
import models from '../models';
import Sequelize from 'sequelize';
import { check, validationResult } from 'express-validator';

export default () => {
    let triviaApi = Router();

    models.TriviaAnswer.belongsTo(models.TriviaQuestion, {foreignKey: 'question'});
    models.TriviaQuestion.hasMany(models.TriviaAnswer, {foreignKey: 'question'});

    /**
     * Get random question by game ID and category
     */
    triviaApi.get('/:gameId/:category/questions', async (req, res) => {
        const question = await triviaApi.getRandomQuesetion(req.params.category);

        if (question) {
            res.json(question);
        } else {
            triviaApi.handleError(res, 400);
        }
    });

    /**
     * Answer trivia question
     */
    triviaApi.post('/:gameId/questions/:id/answer', [
        check('playerId').isInt(),
        check('answerId').isInt()
    ], async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {playerId, answerId} = req.body;

        // Get the question
        const question = await triviaApi.getQuestion(req.params.id);

        if (!question) {
            triviaApi.handleError(res, 404);
            return;
        }

        // Get the player
        const player = await triviaApi.getPlayer(playerId);

        if (!player) {
            triviaApi.handleError(res, 404);
            return;
        }

        // Get the supplied answer
        const answer = await triviaApi.getAnswer(answerId);

        if (!answer) {
            triviaApi.handleError(res, 404);
            return;
        }

        // Update question stats
        const isCorrect = answer.dataValues.correct;
        let {totalCorrect, totalWrong} = question.dataValues;
        if (isCorrect) {
            ++totalCorrect;
            await question.update({totalCorrect});
        } else {
            ++totalWrong;
            await question.update({totalWrong});
        }

        let totalChosen = answer.dataValues.totalChosen;
        ++totalChosen;

        await answer.update({totalChosen});

        // Create player's answer
        await models.PlayerAnswer.create({
            player: player.dataValues.id,
            question: question.dataValues.id,
            answer: answer.dataValues.id,
            correct: answer.dataValues.correct,
            points: question.dataValues.points,
        });

        // Return the correct answer
        const correctAnswer = await models.TriviaAnswer.findOne({
            where: {
                correct: true,
                question: question.dataValues.id,
            }
        });

        // TODO Increase user's score.

        res.status(200);
        res.json({
            correct: answer.dataValues.correct,
            correctAnswer,
        });
    });

    triviaApi.handleError = (res, statusCode) => {
        res.status(statusCode).json({ error: true });
    };

    triviaApi.getRandomQuesetion = (category) => {
        return models.TriviaQuestion.findOne({
            where: {
                category,
            },
            order: [
                Sequelize.fn('RAND'),
            ],
            attributes: ['id', 'category', 'question', 'totalCorrect', 'totalWrong'],
            include: [{
                model: models.TriviaAnswer,
                attributes: ['id', 'answer', 'totalChosen'],
            }],
        });
    };

    triviaApi.getQuestion = (id) => {
        return models.TriviaQuestion.findOne({ where: { id } });
    };

    triviaApi.getAnswer = (id) => {
        return models.TriviaAnswer.findOne({ where: { id } });
    };

    triviaApi.getPlayer = (id) => {
        return models.Player.findOne({
            where: { id, enabled: true },
            attributes: ['id'],
        });
    };

    return triviaApi;
}
