
const express = require('express')
const cors = require('cors')
const morgan = require("morgan")
const bcrypt = require('bcrypt')

const pool = require('./database')

const app = express()

app.use(express.json())
app.use(cors()) 
app.use(morgan("tiny"))

const { PORT } = require("./config")

app.get('/', (req, res) => {
    res.send({ping: 'pong'})
})
const router = require('./routes/auth')
app.use('/auth', router)


app.listen(PORT, function () {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})

