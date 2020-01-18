const express = require('express')
const routes = require('./routes')
const app = express()
const port = process.env.HOST || 8000

routes(app)
app.listen(port, () => {
    console.log(`Express is not up running on port ${port}`)
})