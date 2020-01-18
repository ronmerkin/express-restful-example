'use strict'
const cryptocompareService = require('./crypto.service')
let {
    saveToLocalCache,
    getFromLocalCache
} = require('../repository/cache')

const cryptoCompareList = async () => {
    try {
        const blockChainObj = getFromLocalCache('blockChainObj')
        if (blockChainObj) {
            return blockChainObj
        }
        const cryptoList = await cryptocompareService.getAvailableCoinsList()
        saveToLocalCache('blockChainObj', cryptoList)
        return cryptoList
    } catch (err) {
        throw new Error(err.message)
    }

}

const getMultipleCoinsValuesFromCryptoCompare = async (symbolsPricesArr, currExistingValues) => {
    const coinsPrices = await cryptocompareService.getMultipleCoinsPricesBySybmol(symbolsPricesArr)
    saveToLocalCache('blockChainPricesObj', coinsPrices)
    return {
        ...currExistingValues,
        ...coinsPrices
    }
}

const getSymbolsPrices = async (symbolsPricesArr) => {
    try {
        let coinsPricesObj = {}
        const blockChainPricesObj = getFromLocalCache('blockChainPricesObj')
        if (blockChainPricesObj) {
            const searchPricesSymbols = []
            for(let i in symbolsPricesArr) {
                if (blockChainPricesObj[symbolsPricesArr[i]]) {
                    coinsPricesObj[symbolsPricesArr[i]] = blockChainPricesObj[symbolsPricesArr[i]]
                } else {
                    searchPricesSymbols.push(symbolsPricesArr[i])
                }
            }
            if (searchPricesSymbols.length) {
                coinsPricesObj = getMultipleCoinsValuesFromCryptoCompare(searchPricesSymbols, coinsPricesObj)
            } 
            return coinsPricesObj
        } else {
            return getMultipleCoinsValuesFromCryptoCompare(symbolsPricesArr, {})
        }
    } catch (err) {
        throw new Error(err.message)
    }
}

module.exports = {
    cryptoCompareList,
    getSymbolsPrices
}