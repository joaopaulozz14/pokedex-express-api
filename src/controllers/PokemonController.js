//const Pokemon = require('../models/Pokemon');
//import express from 'express'
//import { redirect } from 'express/lib/response';
import { Pokemon } from '../models/Pokemon.js';
const orderById = {order: [["id", "ASC"]]};

export const getAll = async (req, res) => {
    try {
        const pokedex = await Pokemon.findAll(orderById);
        res.render("index", { pokedex, pokemonPut: null, pokemonDel: null});
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
};

export const signup = (req, res) => {
    try {
        res.render("signup")
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
};
export const create = async (req, res) => {
    try {
        const pokemon = req.body;
        if (!pokemon) {
            return res.redirect("/signup");
        }
        await Pokemon.create(pokemon);
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
};

export const getById = async (req, res) => {
    try {
        const method = req.params.method;
        const pokedex = await Pokemon.findAll(orderById);
        const pokemon = await Pokemon.findByPk(req.params.id);

        if (method === 'put') {
            res.render("index", {
                pokedex,
                pokemonPut: pokemon,
                pokemonDel: null
            });
        } else {
            res.render("index", {
                pokedex,
                pokemonPut: null,
                pokemonDel: pokemon
            });

        }
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

export const update = async (req,res) => {
    try{
        const pokemon = req.body;
        await Pokemon.update(pokemon, {where: {id: req.params.id}})
        res.redirect("/");
    } catch(err){
        res.status(500).send({err: err.message});
    }
}
export const remove = async (req, res) => {
    try{
        await Pokemon.destroy({where: {id: req.params.id}});
    } catch(err){
        res.status(500).send({err: err.message});
    }
}

/**export const personagem = async (req, res) => {
    try{
        const pokemon = await Pokemon.findByPk(req.params.id);
    } catch(err) {
        res.status(500).send({err: err.message});
    }
}
*/
//module.exports = { getAll };