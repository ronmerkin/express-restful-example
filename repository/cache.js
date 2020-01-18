'use strict'

const localCache = {
    blockChainObj: null,
    blockChainPricesObj: null
}

const saveToLocalCache = (mainKey, values) => {
    if (localCache[mainKey]) {
        localCache[mainKey] = {
            ...localCache[mainKey],
            values
        }
    } else {
        localCache[mainKey] = values
    }
}

const getFromLocalCache = (mainKey) => {
    return localCache.mainKey ? localCache.mainKey : null
}

module.exports = {
    saveToLocalCache,
    getFromLocalCache
}