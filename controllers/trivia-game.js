import Router from 'express';
import models from '../models';
import Sequelize from 'sequelize';
import { check, validationResult } from 'express-validator';

export default () => {
    let triviaApi = Router();

    /**
     * Get random question by game ID and category
     */
    triviaApi.get('/:gameId/:category/questions', (req, res) => {
        // TODO Refactor me. Move model relationships out of controller.
        models.TriviaAnswer.belongsTo(models.TriviaQuestion, {foreignKey: 'question'});
        models.TriviaQuestion.hasMany(models.TriviaAnswer, {foreignKey: 'question'});
        models.TriviaQuestion.findOne({
            where: {
                category: req.params.category,
            },
            order: [
                Sequelize.fn('RAND'),
            ],
            attributes: ['id', 'category', 'question', 'totalCorrect', 'totalWrong'],
            include: [{
                model: models.TriviaAnswer,
                attributes: ['id', 'answer', 'totalChosen'],
            }],
        }).then(question => {
            res.json(question);
        }).catch(error => {
            console.error(error);
        });
    });

    /**
     * Answer trivia question
     */
    triviaApi.post('/:gameId/questions/:id/answer', [
        check('playerId').isInt(),
        check('answerId').isInt()
    ], (req, res) => {
        // TODO Refactor nasty chaining. Look into async await.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {playerId, answerId} = req.body;

        models.TriviaQuestion.findOne({
            where: {
                id: req.params.id,
            },
        }).then(question => {
            models.Player.findOne({
                where: {
                    id: playerId,
                    enabled: true,
                },
                attributes: ['id']
            }).then(player => {
                models.TriviaAnswer.findOne({
                    where: {
                        id: answerId,
                    },
                }).then(answer => {
                    const isCorrect = answer.dataValues.correct;
                    let {totalCorrect, totalWrong} = question.dataValues;
                    if (isCorrect) {
                        ++totalCorrect;
                        question.update({totalCorrect});
                    } else {
                        ++totalWrong;
                        question.update({totalWrong});
                    }

                    let totalChosen = answer.dataValues.totalChosen;
                    ++totalChosen;

                    answer.update({totalChosen});
                    
                    models.PlayerAnswer.create({
                        player: player.dataValues.id,
                        question: question.dataValues.id,
                        answer: answer.dataValues.id,
                        correct: answer.dataValues.correct,
                        points: question.dataValues.points,
                    }).then(() => {
                        // TODO Increase user's score.
                        models.TriviaAnswer.findOne({
                            where: {
                                correct: true,
                                question: question.dataValues.id,
                            }
                        }).then(correctAnswer => {
                            res.status(200);
                            res.json({
                                correct: answer.dataValues.correct,
                                correctAnswer,
                            });
                        });
                    }).catch(error => {
                        res.status(500);
                        console.error(error);
                        res.json(error);
                    });
                }).catch(error => {
                    res.status(404);
                    res.json({
                        error: `answer ${answerId} not found`,
                    });
                })
            }).catch(error => {
                res.status(404);
                res.json({
                    error: `player ${playerId} not found`,
                });
            })
        }).catch(error => {
            res.status(404);
            res.json({
                error: `question ${req.params.id} not found`,
            });
        })
    });

    return triviaApi;
}
