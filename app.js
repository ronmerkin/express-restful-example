const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { initDB } = require('./repository/init-db')
const app = express()
const port = process.env.HOST || 8000

routes(app)
initDB()
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())
app.listen(port, () => {
    console.log(`Express is now up running on port ${port}`)
})

//TODO: list:
//1. change schema of cache to add price to each symbol
//2. adapt function to get price
//3. function to save to DB and to update