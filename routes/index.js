'use strict'
const blockchainController = require('../controller/blockchain.controller')

const createRourtes = (app) => {
    app.get('/blockchain/list', blockchainController.getBlockChainList)
    app.get('/blockchain/symbols/prices', blockchainController.getSymbolsPrices)
}

module.exports = createRourtes;