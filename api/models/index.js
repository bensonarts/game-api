'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

let basename  = path.basename(__filename);
let db = {};
let sequelize = new Sequelize(process.env.DW_DB_NAME, process.env.DW_DB_USER, process.env.DW_DB_PASSWORD, {
    host: process.env.DW_DB_HOST,
    dialect: 'mysql'
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
