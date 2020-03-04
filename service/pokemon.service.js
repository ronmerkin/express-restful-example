'use strict'
const axios = require('axios')

const pokemonsList = async (limit = 40) => {
    const pokemons = (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)).data.results
    console.log('pockemons: ', pokemons)
    return pokemons
}

module.exports = {
    pokemonsList
}