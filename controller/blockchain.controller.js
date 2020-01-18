'use strict'
const blockchainService = require('../service/blockchain.service')

const getBlockChainList = async (req, res, next) => {
    try {
        const availableCoinsList = await blockchainService.cryptoCompareList()    
        res.json(availableCoinsList)
    } catch (err) {
        res.status(400).send(err.message)       
    }
    
}

const getSymbolsPrices = async (req, res, next) => {
    const priceSymbolsArr = req.query.pricesSymbol
    const result = await blockchainService.getSymbolsPrices(priceSymbolsArr)
    res.json(result)
}

module.exports = {
    getBlockChainList,
    getSymbolsPrices
}