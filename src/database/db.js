//const Sequelize = require('sequilize');
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const connection = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect: "postgres",
    });

//module.exports = connection;