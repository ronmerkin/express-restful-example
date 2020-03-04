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
    try {
        if (!req.query.pricesSymbol) {
            return res.status(404).send(`Haven't recieved neseccary parameters`)
        }
        const priceSymbolsArr = req.query.pricesSymbol
        const result = await blockchainService.getSymbolsPrices(priceSymbolsArr)
        res.json(result)    
    } catch (err) {
        res.status(400).send(err.message)       
    }
}

module.exports = {
    getBlockChainList,
    getSymbolsPrices
}