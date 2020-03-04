// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const initializeModels = require('./model')
const DB_HOST_URI = 'mongodb://localhost:27017'
const DB_NAME = 'blockchain'

const initDB = () => {
    mongoose
        .connect(
            `${DB_HOST_URI}/${DB_NAME}`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => {
            console.log('MongoDB Connected')
            initializeModels(mongoose)
        })
        .catch(err => console.log(err));
}

module.exports = {
    initDB
}
