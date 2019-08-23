import Router from 'express';
import models from '../models';
import Sequelize from 'sequelize';
import { check, validationResult } from 'express-validator';

export default () => {
    let triviaApi = Router();

    /**
     * Get random question
     */
    triviaApi.get('/:gameId/:category/questions', (req, res) => {
        models.TriviaQuestion.findOne({
            where: {
                category: req.params.category,
            },
            order: [
                Sequelize.fn('RAND'),
            ],
            attributes: ['id', 'category', 'question'],
        }).then(question => {
            res.json(question);
        }).catch(error => {
            console.error(error);
        });
    });

    triviaApi.post('/:gameId/questions/:id/answer', [
        check('playerId').isInt(),
        check('answerId').isInt()
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {playerId, answerId} = req.body;

        models.TriviaQuestion.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id']
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
                    attributes: ['id', 'correct'],
                }).then(answer => {
                    models.PlayerAnswer.create({
                        player: player.dataValues.id,
                        question: question.dataValues.id,
                        answer: answer.dataValues.id,
                        correct: answer.dataValues.correct,
                    }).then(() => {
                        res.status(200);
                        res.json({
                            correct: answer.dataValues.correct,
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
