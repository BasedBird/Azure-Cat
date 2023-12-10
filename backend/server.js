const express = require('express')
const app = express()
//require('dotenv').config()

const PORT = 5000

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
