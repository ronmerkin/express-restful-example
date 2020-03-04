'use strict'
const blockchainController = require('../controller/blockchain.controller')
const pokemonController = require('../controller/pokemon.controller')

const createRourtes = (app) => {
    app.get('/blockchain/list', blockchainController.getBlockChainList)
    app.get('/blockchain/symbols/prices', blockchainController.getSymbolsPrices)
    app.get('/pokemons/list', pokemonController.pokemonsList)
}

module.exports = createRourtes;