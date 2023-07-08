
const db = require("../db");

const bcrypt = require("bcrypt");
const { BadRequestError, UnauthorizedError, NotFoundError } = require("../utils/errors");
// const { validateFields } = require("../utils/validate");

// const { BCRYPT_WORK_FACTOR } = require("../config");

const crypto = require("crypto");
// const jwt = require("jsonwebtoken");
// const secretKey = crypto.randomBytes(64).toString("hex");

class Nutrition {
  /**
   * Convert a nutrition from the database into a nutrition object that can be viewed publically.
   *
   *
   * @param {User} nutrition - nutrition from database
   * @returns nutrition
   */
  static async createNutrition(nutrition) {
    if (!nutrition.name || !nutrition.category || !nutrition.imageUrl || !nutrition.calories || !nutrition.quantity|| !nutrition.imageUrl || !nutrition.user_id){
        throw new BadRequestError("Nutrition field(s) not supplied")
    }
      const result = await db.query(
        `INSERT INTO nutrition (
            user_id, 
            name,
            category,
            image_url,
            calories,
            quantity
          )
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING 
                user_id, 
                name,
                category,
                image_url,
                calories,
                quantity`,
        [
          nutrition.user_id,
          nutrition.name.toLowerCase(),
          nutrition.category.toLowerCase(),
          nutrition.imageUrl.toLowerCase(),
          nutrition.calories,
          nutrition.quantity
        ]
      );
      const nutritionRes = result.rows[0];
      return nutritionRes
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
              user_id,
              name, 
              category,
              image_url,
              calories,
              quantity,
              created_at            
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
   static async listNutritionForUser(user_id) {
    const result = await db.query(
      `SELECT id,
              user_id, 
              name, 
              category,
              image_url,
              calories,
              quantity,
              created_at         
           FROM nutrition
           WHERE user_id = $1`,
      [user_id]
    );

    const nutrition = result.rows;
    if (!nutrition || nutrition.length == 0){
        //throw new NotFoundError("No nutrition logged from this user")
    }
    return nutrition;
  }

   /**
   * Fetch all nutrition instances in the database that 
   * are owned by a particular user and filtered by category
   *
   * @param {String} id
   * @returns nutition
   */
   static async listNutritionForUserByCategory(user_id, selected_category) {
    const result = await db.query(
      `SELECT id,
              user_id, 
              name, 
              category,
              image_url,
              calories,
              quantity,
              created_at         
           FROM nutrition
           WHERE user_id = $1 AND ($2 = '' OR category = $2)`,
      [user_id, selected_category]
    );
    const nutrition = result.rows;

    if (!nutrition || nutrition.length == 0){
        //throw new NotFoundError("No nutrition logged from this user")
    }
    return nutrition;
  }


}

module.exports = Nutrition;
