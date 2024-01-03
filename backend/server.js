const express = require('express')
const app = express()
const { computerVision } = require('./azure/azure')
require('dotenv').config()

const PORT = process.env.PORT

app.use((req, res, next) => {
    console.log(req.method + ": " + req.path)
    next()
})

app.get('/', computerVision)

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})