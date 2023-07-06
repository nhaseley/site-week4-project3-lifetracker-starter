
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
              password,
              first_name AS "firstName",
              last_name AS "lastName",
              location,
              date              
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

    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    return token;
  }

  static async verifyAuthToken(token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (err) {
      return null;
    }
  }


}

module.exports = User;
