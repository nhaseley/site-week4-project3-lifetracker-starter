
const db = require("../db");

const bcrypt = require("bcrypt");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const { validateFields } = require("../utils/validate");

const { BCRYPT_WORK_FACTOR } = require("../config");

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secretKey = crypto.randomBytes(64).toString("hex");
// const secretKey = process.env.SECRET_KEY || "secret-dev"

class User {
  /**
   * Convert a user from the database into a user object that can be viewed publically.
   * Don't show user's password
   *
   *
   * @param {User} user - user from database
   * @returns public user
   */
  static createPublicUser(user) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
      date: user.date,
    };
  }

  /**
   * Authenticate user with email and password.
   *
   * Throws UnauthorizedError if user not found or wrong password.
   *
   * @returns user
   **/

  static async authenticate(creds) {
    // const { email, password } = creds
    const requiredCreds = ["emailInput", "passwordInput"];
    try {
      validateFields({
        required: requiredCreds,
        obj: creds,
        location: "user authentication",
      });
    } catch (err) {
      throw err;
    }

    const user = await User.fetchUserByEmail(creds.emailInput);
    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(creds.passwordInput, user.password);
      if (isValid === true) {
        return User.createPublicUser(user);
      }
    }

    throw new UnauthorizedError("Invalid username/password");
  }

  /**
   * Register user with data.
   *
   * Throws BadRequestError on duplicates.
   *
   * @returns user
   **/

  static async register(creds) {
    // const { email, password } = creds
    const requiredCreds = [
      "emailInput",
      "usernameInput",
      "passwordInput",
      "firstNameInput",
      "lastNameInput",
    ];
    try {
      validateFields({
        required: requiredCreds,
        obj: creds,
        location: "user registration",
      });
    } catch (err) {
      throw err;
    }
    if (!creds.emailInput || !creds.passwordInput) {
      throw new BadRequestError(`Fix credentials: ${creds}`);
    }
    if (await User.fetchUserByEmail(creds.emailInput)) {
      throw new BadRequestError(`Duplicate email: ${creds.emailInput}`);
    }

    const hashedPassword = await bcrypt.hash(
      creds.passwordInput,
      BCRYPT_WORK_FACTOR
    );

    const result = await db.query(
      `INSERT INTO users (
          email,
          username, 
          password,
          first_name,
          last_name
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING 
                  email,       
                  username,
                  password,
                  first_name, 
                  last_name`,
      [
        creds.emailInput.toLowerCase(),
        creds.usernameInput.toLowerCase(),
        hashedPassword,
        creds.firstNameInput,
        creds.lastNameInput,
      ]
    );

    const user = result.rows[0];

    return user;
  }

  /**
   * Fetch a user in the database by email
   *
   * @param {String} email
   * @returns user
   */
  static async fetchUserByEmail(email) {
    const result = await db.query(
      `SELECT id,
              email, 
              username,
              password,
              first_name AS "firstName",
              last_name AS "lastName",
              created_at,
              updated_at              
           FROM users
           WHERE email = $1`,
      [email.toLowerCase()]
    );

    const user = result.rows[0];
    return user;
  }

  /**
   * Fetch a user in the database by id
   *
   * @param {String} user_id
   * @returns user
   */
  static async fetchById(user_id) {
    const result = await db.query(
      `SELECT id,
              email,    
              username,
              first_name,
              last_name
           FROM users
           WHERE id = $1`,
      [user_id]
    );

    const user = result.rows[0];
    return user;
  }

  static async generateAuthToken(user) {
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
      date: user.date,
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: "4h" });
    return token;
  }

  static verifyAuthToken(token) {
    try {
      //TODO: use verify and figure out why we can't verify currently
      const decoded = jwt.decode(token, secretKey);
      return decoded;
    } catch (err) {
      return null;
    }
  }


/**
   * Fetch all user in the database that are not the input id
   *
   * @param {String} user_id
   * @returns user
   */
static async fetchAllUsers(user_id) {
  const result = await db.query(
    `SELECT id,
            first_name,
            last_name            
         FROM users
         WHERE id <> $1`,
    [user_id]
  );
  
  const users = result.rows;

  return users;
}


/**
   * Fetch all followings in the database for a given user
   *
   * @param {String} user_id
   * @returns user
   */
static async fetchFollowings(user_id) {
  const result = await db.query(
    `SELECT follower_id, followed_id
    FROM user_followers
    WHERE follower_id = $1`,
    [user_id]
  );
  
  const followings = result.rows;

  return followings;
}


// /**
//    * Insert given following user into the database that are not the input id
//    *
//    * @param {String} user_id
//    * @returns user
//    */
static async followUser(user_id, followed_id) {
  await db.query(
    `INSERT INTO user_followers (follower_id, followed_id, created_at)
    SELECT $1, $2, CURRENT_TIMESTAMP
    WHERE NOT EXISTS (
      SELECT 1
      FROM user_followers
      WHERE follower_id = $1 AND followed_id = $2
    )
    `,
    [user_id, followed_id]);
  const result2 = await db.query(`  SELECT follower_id, followed_id
    FROM user_followers
    WHERE follower_id = $1
  `, [user_id]
  );

  const followings = result2.rows;
  return followings;
}

}



module.exports = User;
