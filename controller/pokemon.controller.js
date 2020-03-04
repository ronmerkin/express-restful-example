'use strict'
const pokemonService = require('../service/pokemon.service')

const pokemonsList = async (req, res, next) => {
    try {
        const limit = req.query.limit || 40
        const pokemons = await pokemonService.pokemonsList(limit)    
        res.json(pokemons)
    } catch (err) {
        res.status(400).send(err.message)       
    }
}
//TODO:  maybe add a part about sprites which we can also get pockemons images

module.exports = {
    pokemonsList
}