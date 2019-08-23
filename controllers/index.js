import Router from 'express';
import models from '../models';

export default () => {
    let api = Router();

    /**
     * Health check, connect to database.
     */
    api.get('/', (req, res) => {
        const sequelize = models.sequelize;
        sequelize.authenticate().then(() => {
            res.json({
                'success': true,
            });
        }).catch(error => {
            console.error(error);
            res.status(500);
            res.json({
                'success': false,
            });
        });
    });

    /**
     * Resolves the 404 errors for favicon requests.
     */
    api.get('/favicon.ico', (req, res) => {
        res.status(204);
    });

    return api;
}
