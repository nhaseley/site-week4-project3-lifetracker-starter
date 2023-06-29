
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

// app.post('/login', async (req, res) => {
//   console.log("hi")
    // let selectedUsername = await pool.query('SELECT username FROM users');
    // console.log(selectedUsername)
    // if (selectedUsername.rowCount === 0) { // No existing user
    //     let hashedUsername = await bcrypt.hash(req.body.inputUsername, 10);        
    //         await pool.query('INSERT INTO users VALUES ($1) RETURNING *', 
    //                 [hashedUsername])
    //     res.send(req.body.inputUsername)
    //     console.log(req.body.inputUsername)
    //     return
    // } 
    // else {
    //     let correctInput = await bcrypt.compare(req.body.inputUsername, inputUsername.rows[0].username)
    //     if (correctInput) {
    //         res.send(true)
    //     }
    //     else { 
    //         res.send(false)
    //     }
    // }
// })




app.listen(PORT, function () {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})

