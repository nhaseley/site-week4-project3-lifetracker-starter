const db = require("../db");

const bcrypt = require("bcrypt");
const {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
} = require("../utils/errors");

class Activity {
  /**
   * Calculates the average calories per day in exercise database for specific user using SQL query
   *
   * @param {String} user_id
   * @returns total calories per day
   */
  static async calculateDailyCaloriesSummaryStats(user_id) {
    const result = await db.query(
      `SELECT DATE(created_at) AS date, CAST(AVG(calories) AS INT) AS average_calories
      FROM nutrition
      
      WHERE user_id = $1
      GROUP BY date`,
      [user_id]
    );
    const dailyCals = result.rows[0].average_calories;
    if (!dailyCals) {
      throw new NotFoundError("No nutrition logged from this user");
    }
    return dailyCals;
  }


/**
   * Calculates the average calories per day in exercise database for specific user using SQL query
   *
   * @param {String} user_id
   * @returns total calories per day
   */
static async calculateMaxCaloriesInMeal(user_id) {
    const result = await db.query(
      `SELECT MAX(calories) AS max_calories
      FROM nutrition
      
      WHERE user_id = $1`,
      [user_id]
    );
    const maxCalories = result.rows[0].max_calories;
    if (!maxCalories) {
      throw new NotFoundError("No nutrition logged from this user");
    }
    return maxCalories;
  }





  /**
   * Calculates the Total Exercise Duration in exercise database for specific user using SQL query
   *
   * @param {String} user_id
   * @returns total exercise duration
   */
  static async totalExerciseDuration(user_id) {
    const result = await db.query(
      `SELECT CAST(SUM(duration) AS INT) AS total_duration
      FROM exercise
      WHERE user_id = $1`,
      [user_id]
    );
    const totalDuration = result.rows[0].total_duration;
    if (!totalDuration) {
      throw new NotFoundError("No exercise logged from this user");
    }
    return { totalDuration };
  }

  /**
   * Calculates the Average Hours of Sleep per day in sleep database for specific user using SQL query
   *
   * @param {String} user_id
   * @returns total hours of sleep per day
   */
  static async averageHoursofSleep(user_id) {
    const result = await db.query(
      `SELECT 
      DATE(created_at) AS day, 
      CAST(AVG(EXTRACT(EPOCH FROM (endTime::timestamp - startTime::timestamp)) / 3600) AS INT) AS average_sleep_hours
  FROM sleep
      WHERE user_id = $1
      GROUP BY day`,
      [user_id]
    );
    const averageSleepHours = result.rows[0].average_sleep_hours;
    if (!averageSleepHours) {
      throw new NotFoundError("No sleep logged from this user");
    }
    return { averageSleepHours };
  }
}
module.exports = Activity;
