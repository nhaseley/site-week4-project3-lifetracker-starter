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
    const perWeek = await Activity.calculateWeeklyCaloriesSummaryStats(decoded.id)
    console.log("week", perWeek)
    const perMonth = await Activity.calculateMonthlyCaloriesSummaryStats(decoded.id)
    const maxCals = await Activity.calculateMaxCaloriesInMeal(decoded.id)

    const totalDuration = await Activity.calculateTotalExerciseDuration(decoded.id)
    const avgIntensity = await Activity.calculateAverageExerciseIntensity(decoded.id)

    const avgHours = await Activity.calculateAverageHoursofSleep(decoded.id)
    const totalHours = await Activity.calculateTotalHoursSlept(decoded.id)

    return res.status(201).json({nutrition: {perDay, perWeek, perMonth, maxCals}, exercise: {totalDuration, avgIntensity}, sleep: {avgHours, totalHours}})
  } catch (err) {
    res.send(err)
    next(err)
  }
})

router.post("/users", async function (req, res, next) {
  try {
    let token = req.body.token
    let decoded = User.verifyAuthToken(token)
    const databaseUsers = await User.fetchAllUsers(decoded.id)


    const userFollowings = await User.fetchFollowings(decoded.id)
    console.log("user followings???", userFollowings)
    
    return res.status(201).json({databaseUsers, userFollowings})
  } catch (err) {
    res.send(err)
    next(err)
  }
})


async function getFollowingInfo(followingId){
  const follower = await User.fetchById(followingId)
  return follower.first_name
 }

 
router.post("/follow", async function (req, res, next) {
  try {
    let token = req.body.token
    let decoded = User.verifyAuthToken(token)
    const updatedDatabaseUsers = await User.followUser(decoded.id, req.body.followed_id)
    console.log("updatedDatabaseUsers", updatedDatabaseUsers)

    // const name = await getFollowingInfo(req.body.followed_id)
    // updatedDatabaseUsers.map((user, i) => { updatedDatabaseUsers[updatedDatabaseUsers.length-1].followed_id = name})
    // console.log("updatedDatabaseUsers AFTER", updatedDatabaseUsers)
    return res.status(201).json(updatedDatabaseUsers)

  } catch (err) {
    res.send(err)
    next(err)
  }
})




module.exports = router
