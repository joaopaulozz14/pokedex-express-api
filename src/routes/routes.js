//const routes = require('express').Router();
import express from 'express';
//import { route } from 'express/lib/application';
import { getAll, signup, create, getById, update, remove } from '../controllers/PokemonController.js'
export const routes = express.Router();
//const PokemonController = require('../controllers/PokemonController');
routes.get("/", getAll);
routes.get("/signup", signup);
routes.post("/create", create);
routes.get("/getById/:id/:method", getById);
routes.post("/update/:id", update);
routes.get("/remove/:id", remove)
//module.exports = routes;