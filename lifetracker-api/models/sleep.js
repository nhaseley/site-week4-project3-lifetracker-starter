
const db = require("../db");

const bcrypt = require("bcrypt");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const { validateFields } = require("../utils/validate");

const { BCRYPT_WORK_FACTOR } = require("../config");

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secretKey = crypto.randomBytes(64).toString("hex");

class Sleep {
  /**
   * Convert a sleep from the database into a sleep object that can be viewed publically.
   *
   *
   * @param {User} sleep - sleep from database
   * @returns sleep
   */
  static async createSleep(sleep) {
    console.log("sleep in backend: ", sleep)
    if (!sleep.user_id || !sleep.startTime || !sleep.endTime){
        throw new BadRequestError("Sleep field(s) not supplied")
    }
    // if (Sleep.fetchSleepById(sleep.id)) {
    //     throw new BadRequestError(`Duplicate sleep: ${sleep}`);
    //   }
      const result = await db.query(
        `INSERT INTO sleep (
            user_id, 
            startTime,
            endTime
          )
          VALUES ($1, $2, $3)
          RETURNING 
                user_id, 
                startTime,
                endTime`,
        [
          sleep.user_id,
          sleep.startTime,
          sleep.endTime
        ]
      );
      const sleepRes = result.rows[0];
      return sleepRes
    }

  /**
   * Fetch a sleep in the database by id
   *
   * @param {String} id
   * @returns sleep
   */
  static async fetchSleepById(id) {
    const result = await db.query(
      `SELECT id,
              user_id,
              startTime,
              endTime            
           FROM sleep
           WHERE id = $1`,
      [id]
    );

    const sleep = result.rows[0];
    if (!sleep){
        throw new NotFoundError("No sleep found in database")
    }
    return sleep;
  }

  
   /**
   * Fetch all sleep instances in the database that 
   * are owned by a particular user
   *
   * @param {String} id
   * @returns sleep
   */
   static async listSleepForUser(user_id) {
    const result = await db.query(
      `SELECT id,
              user_id,
              startTime, 
              endTime          
           FROM sleep
           WHERE user_id = $1`,
      [user_id]
    );
// TODO: add to a list instead of retunring first instance?
    const sleep = result.rows[0];
    if (!sleep){
        throw new NotFoundError("No sleep logged from this user")
    }
    return sleep;
  }


}

module.exports = Sleep;
