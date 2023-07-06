
const db = require("../db");

const bcrypt = require("bcrypt");
const { BadRequestError, UnauthorizedError, NotFoundError } = require("../utils/errors");
const { validateFields } = require("../utils/validate");

const { BCRYPT_WORK_FACTOR } = require("../config");

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secretKey = crypto.randomBytes(64).toString("hex");

class Exercise {
  /**
   * Convert a exercise from the database into a exercise object that can be viewed publically.
   *
   *
   * @param {User} exercise - exercise from database
   * @returns exercise
   */
  static async createExercise(exercise) {
    
    if (!exercise.name || !exercise.category || !exercise.duration || !exercise.intensity || !exercise.user_id){
        throw new BadRequestError("Exercise field(s) not supplied")
    }
      const result = await db.query(
        `INSERT INTO exercise (
            user_id, 
            name,
            category,
            duration,
            intensity
          )
          VALUES ($1, $2, $3, $4, $5)
          RETURNING 
                user_id, 
                name,
                category,
                duration,
                intensity`,
        [
          exercise.user_id,
          exercise.name.toLowerCase(),
          exercise.category.toLowerCase(),
          exercise.duration,
          exercise.intensity
        ]
      );
      const exerciseRes = result.rows[0];
      return exerciseRes
    }

  /**
   * Fetch a exercise in the database by id
   *
   * @param {String} id
   * @returns exercise
   */
  static async fetchExerciseById(id) {
    const result = await db.query(
      `SELECT id,
              user_id,
              name, 
              category,
              duration,
              intensity,
              created_at            
           FROM exercise
           WHERE id = $1`,
      [id]
    );

    const exercise = result.rows[0];
    if (!exercise){
        throw new NotFoundError("No exercise found in database")
    }
    return exercise;
  }

  
   /**
   * Fetch all exercise instances in the database that 
   * are owned by a particular user
   *
   * @param {String} id
   * @returns exercise
   */
   static async listExerciseForUser(user_id) {
    const result = await db.query(
      `SELECT id,
              user_id,
              name, 
              category,
              duration,
              intensity,
              created_at           
           FROM exercise
           WHERE user_id = $1`,
      [user_id]
    );

    const exercise = result.rows;
    if (!exercise || exercise.length == 0){
        throw new NotFoundError("No exercise logged from this user")
    }
    return exercise;
  }


}

module.exports = Exercise;
