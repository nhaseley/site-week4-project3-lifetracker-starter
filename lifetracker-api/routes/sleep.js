const express = require("express");
const router = express.Router();
const Sleep = require("../models/sleep");
const User = require("../models/user");

router.post("/create-sleep", async function (req, res, next) {
  try {
    const updatedSleep = await Sleep.createSleep(req.body);
    return res.status(201).json({ updatedSleep });
  } catch (err) {
    res.send(err);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    let token = req.body.token;
    let decoded = User.verifyAuthToken(token);
    const sleepList = await Sleep.listSleepForUser(decoded.id);
    return res.status(201).json({ sleepList });
  } catch (err) {
    res.send(err);
    next(err);
  }
});
module.exports = router;
