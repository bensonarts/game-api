import Router from 'express';
import Sequelize from 'sequelize';

export default () => {
    let api = Router();

    /**
     * Health check, connect to database.
     */
    api.get('/', (req, res) => {
        api.getConnection()
            .authenticate()
            .then(() => {
                res.json({
                    'success': true
                });
            })
            .catch(error => {
                console.error(error);
                res.status(500);
                res.json({
                    'success': false
                });
            });
    });

    /**
     * Resolves the 404 errors for favicon requests.
     */
    api.get('/favicon.ico', (req, res) => {
        res.status(204);
    });

    /**
     * Get database connection
     *
     * @returns {Sequelize}
     */
    api.getConnection = () => {
        return new Sequelize(process.env.DW_DB_NAME, process.env.DW_DB_USER, process.env.DW_DB_PASSWORD, {
            host: process.env.DW_DB_HOST,
            dialect: 'mysql',
            logging: false
        });
    };

    return api;
}
