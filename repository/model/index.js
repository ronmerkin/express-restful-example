'use strict'
const cryptoCoinSchema = require('./cryptoCoin')

const initializeModels = (mongoose) => {
    mongoose.model('cryptoCoin', cryptoCoinSchema)
}

module.exports = initializeModels