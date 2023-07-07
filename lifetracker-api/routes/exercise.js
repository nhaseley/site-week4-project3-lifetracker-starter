const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");
const User = require("../models/user");

router.post("/create-exercise", async function (req, res, next) {
  try {
    const updatedExercise = await Exercise.createExercise(req.body);
    return res.status(201).json({ updatedExercise });
  } catch (err) {
    res.send(err);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    let token = req.body.token;
    let decoded = User.verifyAuthToken(token);
    const exerciseList = await Exercise.listExerciseForUser(decoded.id);
    return res.status(201).json({ exerciseList });
  } catch (err) {
    res.send(err);
    next(err);
  }
});
module.exports = router;
