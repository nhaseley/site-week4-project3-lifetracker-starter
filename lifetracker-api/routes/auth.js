/** Routes for authentication. */

const express = require("express")
const User = require("../models/user")
const router = express.Router()
const { authenticateJWT } = require('../utils/tokens')
const Nutrition = require("../models/nutrition")
const Sleep = require("../models/sleep")
const Exercise = require("../models/exercise")

router.post("/login", async function (req, res, next) {
  try {
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
    const user = await User.register(req.body)
    const token = await User.generateAuthToken(user)
    return res.status(201).json({ user, token})
  } catch (err) {
    res.send(err)
    next(err)
  }
})

router.post("/create-nutrition", async function (req, res, next) {
  try {
    const updatedNutrition = await Nutrition.createNutrition(req.body)
    return res.status(201).json({ updatedNutrition })
  } catch (err) {
    res.send(err)
    next(err)
  }
})

router.post("/create-sleep", async function (req, res, next) {
  try {
    const updatedSleep = await Sleep.createSleep(req.body)
    return res.status(201).json({ updatedSleep })
  } catch (err) {
    res.send(err)
    next(err)
  }
})

router.post("/create-exercise", async function (req, res, next) {
  try {
    const updatedExercise = await Exercise.createExercise(req.body)
    return res.status(201).json({ updatedExercise })
  } catch (err) {
    res.send(err)
    next(err)
  }
})

router.post("/nutrition", async function (req, res, next) {
  try {
    const nutritionList = await Nutrition.listNutritionForUser(req.body)
    return res.status(201).json({ nutritionList })
  } catch (err) {
    res.send(err)
    next(err)
  }
})


module.exports = router
