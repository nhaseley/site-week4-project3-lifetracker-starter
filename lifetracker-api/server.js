
const express = require('express')
const cors = require('cors')
const morgan = require("morgan")
const bcrypt = require('bcrypt')

const pool = require('./database')

const app = require('./app')
const { PORT } = require("./config")

const router = require('./routes/auth')
const User = require('./models/user')

app.use('/auth', router)

router.post("/login", async function (req, res, next) {
  try {
    const user = await User.authenticate(req.body)
    if (user){
      const token = await User.generateAuthToken(user)
      return res.status(200).json({ user, token})
    }

  } catch (err) {
    res.send(err)
    next(err)
  }
})

router.post("/register", async function (req, res, next) {
  try {
    const user = await User.register(req.body)
    console.log("INSERTED USER: ", user)
    const token = await User.generateAuthToken(user)
    console.log("TOKEN OUTPUT: ", token)
    return res.status(201).json({ user, token})
  } catch (err) {
    res.send(err)
    next(err)
  }
})

app.listen(PORT, function () {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})

