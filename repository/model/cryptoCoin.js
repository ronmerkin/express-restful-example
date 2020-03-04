const mongoose = require('mongoose')

const cryptoCoinSchema = new mongoose.Schema({
    name: String,
    id: Number,
    symbol: String
})

module.exports = cryptoCoinSchema