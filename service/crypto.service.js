'use strict'
const axios = require('axios')
const api_key = '1ccb2a7be9b6ad6807a35cdc7eb1a94871eaaf82c1cce1121ed11caa5778826b'
const cryptoCompareBaseUrl = 'https://min-api.cryptocompare.com/data'

const getAvailableCoinsList = async () => {
    const coinsList = (await axios.get(`${cryptoCompareBaseUrl}/blockchain/list?api_key=${api_key}`)).data.Data
    return Object.keys(coinsList).reduce((acc, coin) => {
        acc[coin] = {
            id: coinsList[coin].id,
            symbol: coinsList[coin].symbol
        }
        return acc
    }, {})
}

const getMultipleCoinsPricesBySybmol = async (coinsSymbolsArr) => {
    const coinsSymbolStr = coinsSymbolsArr.reduce((acc, curr, idx) => {
        acc += idx === 0 ? `${curr}` : `,${curr}`
        return acc
    }, '')
    return (await axios.get(`${cryptoCompareBaseUrl}/pricemulti?fsyms=${coinsSymbolStr}&tsyms=USD,EUR&api_key=${api_key}`)).data
}

module.exports = {
    getAvailableCoinsList,
    getMultipleCoinsPricesBySybmol
}