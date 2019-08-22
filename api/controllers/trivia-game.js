import Router from 'express';
import Sequelize from 'sequelize';
import models from '../models';

export default () => {
    let api = Router();

    /**
     * Get VIP status by CIF
     */
    api.get('/vips/cifno/:cifNo', (req, res) => {
        models.Vip.findOne({
            where: {
                cifNo: req.params.cifNo
            },
            attributes: ['vipStatus', 'loanAmount', 'cifNo', 'cifNumber']
        }).then(vip => {
            if (!vip) {
                vip = {
                    vipStatus: 0
                };
            }
            res.json(vip);
        }).catch(error => {
            console.error(error);
        });
    });
}
