//const Pokemon = require('../models/Pokemon');
//import express from 'express'
//import { redirect } from 'express/lib/response';
import { Pokemon } from '../models/Pokemon.js'

export const getAll = async (req, res) => {
    try{
        const pokedex = await Pokemon.findAll();
        res.render("index", {pokedex, pokemon: undefined});
    } catch (err){
        res.status(500).send({err: err.message});
    }
};

export const signup =  (req,res) => {
    try{
        res.render("signup")
    } catch (err){
        res.status(500).send({err: err.message});
    }
}
export const create = async (req, res) => {
    try{
        const pokemon = req.body;
        if(!pokemon){
            return res.redirect("/signup");
        }
        await Pokemon.create(pokemon);
        res.redirect("/");
    } catch(err){
        res.status(500).send({err: err.message});
    }
}

//module.exports = { getAll };