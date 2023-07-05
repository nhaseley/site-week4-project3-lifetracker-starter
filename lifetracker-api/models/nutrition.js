
const db = require("../db");

const bcrypt = require("bcrypt");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const { validateFields } = require("../utils/validate");

const { BCRYPT_WORK_FACTOR } = require("../config");

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secretKey = crypto.randomBytes(64).toString("hex");

class User {
  /**
   * Convert a nutrition from the database into a nutrition object that can be viewed publically.
   *
   *
   * @param {User} nutrition - nutrition from database
   * @returns nutrition
   */
  static createNutrition(nutrition, userId) {
    if (!nutrition.name || !nutrition.category || !nutrition.imageUrl || !nutrition.calories || !nutrition.imageUrl || !userId){
        throw new BadRequestError("Nutrition field(s) not supplied")
    }
    if (User.fetchNutritionById(nutrition.id)) {
        throw new BadRequestError(`Duplicate nutrition: ${nutrition}`);
      }
    return {
      id: nutrition.id,
      userId: userId,
      name: nutrition.name,
      category: nutrition.category,
      imageUrl: nutrition.imageUrl,
      calories: nutrition.calories,
      quantity: 1
    }
  }

  /**
   * Fetch a nutrition in the database by id
   *
   * @param {String} id
   * @returns nutition
   */
  static async fetchNutritionById(id) {
    const result = await db.query(
      `SELECT id,
              userId,
              name, 
              category,
              imageUrl,
              calories,
              quantity            
           FROM nutrition
           WHERE id = $1`,
      [id]
    );

    const nutrition = result.rows[0];
    if (!nutrition){
        throw new NotFoundError("No nutrition found in database")
    }
    return nutrition;
  }

  
   /**
   * Fetch all nutrition instances in the database that 
   * are owned by a particular user
   *
   * @param {String} id
   * @returns nutition
   */
   static async listNutritionForUser(userId) {
    const result = await db.query(
      `SELECT id,
              name, 
              category,
              imageUrl,
              calories,
              quantity            
           FROM nutrition
           WHERE userId = $1`,
      [userId]
    );
// TODO: add to a list instead of retunring first instance?
    const nutrition = result.rows[0];
    if (!nutrition){
        throw new NotFoundError("No nutrition logged from this user")
    }
    return nutrition;
  }


}

module.exports = User;
