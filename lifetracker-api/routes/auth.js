const express = require("express")
const User = require("../models/user")
const router = express.Router()
const Activity = require("../models/activity")

/** Routes for authentication. */
router.post('/me', (req, res) => {
  let token = req.body.token
  let decoded = User.verifyAuthToken(token)
  res.send(decoded)
})


router.post("/activity", async function (req, res, next) {
  try {
    let token = req.body.token
    let decoded = User.verifyAuthToken(token)
    const perDay = await Activity.calculateDailyCaloriesSummaryStats(decoded.id)
    const maxCals = await Activity.calculateMaxCaloriesInMeal(decoded.id)

    const totalDuration = await Activity.calculateTotalExerciseDuration(decoded.id)
    const avgIntensity = await Activity.calculateAverageExerciseIntensity(decoded.id)

    const avgHours = await Activity.calculateAverageHoursofSleep(decoded.id)
    const totalHours = await Activity.calculateTotalHoursSlept(decoded.id)

    return res.status(201).json({nutrition: {perDay, maxCals}, exercise: {totalDuration, avgIntensity}, sleep: {avgHours, totalHours}})
  } catch (err) {
    res.send(err)
    next(err)
  }
})


module.exports = router
