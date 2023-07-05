/** Routes for authentication. */

const express = require("express")
const User = require("../models/user")
const router = express.Router()
const { authenticateJWT } = require('../utils/tokens')

// router.get("/me", async function (req, res) {
//     // return res.status(200).json(
//         // TODO: FIX?
//     const user = await User.authenticate(req.body)
//     return res.status(200).json({user})
// })

router.post("/login", async function (req, res, next) {
  try {
    console.log("logging in...")
    const user = await User.authenticate(req.body)
    if (user){
      const token = await User.generateAuthToken(user)
      return res.status(200).json({ user, token})
      // return res.status(200).json({ user })
    }

  } catch (err) {
    res.send(err)
    next(err)
  }
})

router.post("/register", async function (req, res, next) {
  try {
    console.log("registrating...")
    const user = await User.register(req.body)
    const token = await User.generateAuthToken(user)
    return res.status(201).json({ user, token})
  } catch (err) {
    res.send(err)
    next(err)
  }
})


module.exports = router
