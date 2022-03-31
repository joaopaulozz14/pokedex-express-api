//const sequilize = require('sequelize');
//const connection = require('../database/db');
import Sequelize from 'sequelize';
import { connection } from '../database/db.js';

export const Pokemon = connection.define(
    'pokemon', 
    {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false,
    },
},
    {
    freezeTableName: true,
    timestamps: false,
    createAt: false,
    updateAt: false,
    }
);

