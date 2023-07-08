const express = require("express");
const router = express.Router();
const Nutrition = require("../models/nutrition");
const User = require("../models/user");

router.post("/create-nutrition", async function (req, res, next) {
  try {
    const updatedNutrition = await Nutrition.createNutrition(req.body);
    return res.status(201).json({ updatedNutrition });
  } catch (err) {
    res.send(err);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    let token = req.body.token;
    let decoded = User.verifyAuthToken(token);
    const nutritionList = await Nutrition.listNutritionForUser(decoded.id);

    return res.status(201).json({ nutritionList });
  } catch (err) {
    res.send(err);
    next(err);
  }
});

router.post("/category", async function (req, res, next) {
  try {
    let token = req.body.token;
    let decoded = User.verifyAuthToken(token);
    const nutritionListForCategory = await Nutrition.listNutritionForUserByCategory(decoded.id, req.body.selectedCategory);
    
    return res.status(201).json({ nutritionListForCategory });
  } catch (err) {
    res.send(err);
    next(err);
  }
});

module.exports = router;
