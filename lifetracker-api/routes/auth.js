/** Routes for authentication. */

const express = require("express")
const User = require("../models/user")
const router = express.Router()
const { authenticateJWT } = require('../utils/tokens')
const Nutrition = require("../models/nutrition")
const Sleep = require("../models/sleep")
const Exercise = require("../models/exercise")
const Activity = require("../models/activity")
const jwt = require('jsonwebtoken')

router.post('/me', (req, res) => {
  let token = req.body.token
  let decoded = User.verifyAuthToken(token)
  console.log(decoded)
  res.send(decoded)
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
    let token = req.body.token
    let decoded = User.verifyAuthToken(token)
    const nutritionList = await Nutrition.listNutritionForUser(decoded.id)

    return res.status(201).json({ nutritionList })
  } catch (err) {
    res.send(err)
    next(err)
  }
})

router.post("/exercise", async function (req, res, next) {
  try {
    let token = req.body.token
    let decoded = User.verifyAuthToken(token)
    const exerciseList = await Exercise.listExerciseForUser(decoded.id)
    return res.status(201).json({ exerciseList })
  } catch (err) {
    res.send(err)
    next(err)
  }
})

router.post("/sleep", async function (req, res, next) {
  try {
    let token = req.body.token
    let decoded = User.verifyAuthToken(token)
    const sleepList = await Sleep.listSleepForUser(decoded.id)
    return res.status(201).json({ sleepList })
  } catch (err) {
    res.send(err)
    next(err)
  }
})


router.post("/activity", async function (req, res, next) {
  try {
    let token = req.body.token
    let decoded = User.verifyAuthToken(token)
    const perDay = await Activity.calculateDailyCaloriesSummaryStats(decoded.id)
    const maxCals = await Activity.calculateMaxCaloriesInMeal(decoded.id)
    const exercise = await Activity.totalExerciseDuration(decoded.id)
    const sleep = await Activity.averageHoursofSleep(decoded.id)
    

    return res.status(201).json({nutrition: {perDay, maxCals}, exercise, sleep})
  } catch (err) {
    res.send(err)
    next(err)
  }
})


module.exports = router
