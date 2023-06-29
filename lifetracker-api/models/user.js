const hi = require("../app")
const db = require("../db")
console.log("DB HERE" ,db)

const bcrypt = require("bcrypt")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")
const { validateFields } = require("../utils/validate")

const { BCRYPT_WORK_FACTOR } = require("../config")

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
    }
  }

  /**
   * Authenticate user with email and password.
   *
   * Throws UnauthorizedError if user not found or wrong password.
   *
   * @returns user
   **/

  static async authenticate(creds) {
    const { email, password } = creds
    const requiredCreds = ["email", "password"]
    try {
      validateFields({ required: requiredCreds, obj: creds, location: "user authentication" })
    } catch (err) {
      throw err
    }

    const user = await User.fetchUserByEmail(email)

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(password, user.password)
      if (isValid === true) {
        return User.createPublicUser(user)
      }
    }

    throw new UnauthorizedError("Invalid username/password")
  }

  /**
   * Register user with data.
   *
   * Throws BadRequestError on duplicates.
   *
   * @returns user
   **/

  static async register(creds) {
    const { email, username, firstName, lastName, password, confirmPassword } = creds
    const requiredCreds = ["email", "username", "firstName", "lastName", "password"]
    try {
      validateFields({ required: requiredCreds, obj: creds, location: "user registration" })
    } catch (err) {
      throw err
    }

    if (User.fetchUserByEmail(email)) {
      throw new BadRequestError(`Duplicate email: ${email}`)
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR)

    const result = await db.query(
      `INSERT INTO users (
          email,
          username, 
          password,
          first_name,
          last_name
        )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id,
                  email,       
                  username,
                  password,
                  first_name AS "firstName", 
                  last_name AS "lastName"
                  `,
      [lowercasedEmail.toLowerCase(), username.toLowerCase(), hashedPassword, firstName, lastName]
    )

    const user = result.rows[0]

    return user
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
              password,
              first_name AS "firstName",
              last_name AS "lastName",
              location,
              date              
           FROM users
           WHERE email = $1`,
      [email.toLowerCase()]
    )

    const user = result.rows[0]

    return user
  }

  /**
   * Fetch a user in the database by email
   *
   * @param {String} userId
   * @returns user
   */
  static async fetchById(userId) {
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
      [userId]
    )

    const user = result.rows[0]

    return user
  }
}

module.exports = User
