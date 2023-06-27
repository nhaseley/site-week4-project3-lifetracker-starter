"use strict"

const request = require("supertest")

const app = require("../app")

const { commonBeforeAll, commonBeforeEach, commonAfterEach, commonAfterAll } = require("../tests/routes/common")

beforeAll(commonBeforeAll)
beforeEach(commonBeforeEach)
afterEach(commonAfterEach)
afterAll(commonAfterAll)

/************************************** POST /auth/token */

describe("Auth Routes", () => {
  describe("POST /auth/token/", function () {
    test("User can login successfully with valid credentials", async function () {
      const resp = await request(app).post("/auth/token/").send({
        email: "lebron@james.io",
        password: "password",
      })
      expect(resp.statusCode).toEqual(201)
      expect(resp.body).toEqual({
        token: expect.any(String),
      })
    })

    test("Throws Unauthorized error when user doesn't exist in db", async function () {
      const resp = await request(app).post("/auth/token/").send({
        email: "somebody_else@users.io",
        password: "password",
      })
      expect(resp.statusCode).toEqual(401)
    })

    test("Throws Unauthorized error when user provides wrong password", async function () {
      const resp = await request(app).post("/auth/token/").send({
        email: "lebron@james.io",
        password: "nope",
      })
      expect(resp.statusCode).toEqual(401)
    })

    test("Throws BadRequestError error when user doesn't provide password", async function () {
      const resp = await request(app).post("/auth/token/").send({
        email: "lebron@james.io",
      })
      expect(resp.statusCode).toEqual(400)
    })

    test("Throws BadRequestError error when user doesn't provide email", async function () {
      const resp = await request(app).post("/auth/token/").send({
        password: "password",
      })
      expect(resp.statusCode).toEqual(400)
    })
  })

  /************************************** POST /auth/register */
  describe("POST /auth/register/", function () {
    test("Allows user to register with valid credentials", async function () {
      const resp = await request(app).post("/auth/register/").send({
        username: "new",
        firstName: "first",
        lastName: "last",
        password: "password",
        email: "new@email.com",
      })
      expect(resp.statusCode).toEqual(201)
      expect(resp.body).toEqual({
        token: expect.any(String),
      })
    })

    test("Throws BadRequestError error when user doesn't provide all fields", async function () {
      const resp = await request(app).post("/auth/register/").send({
        username: "new",
      })
      expect(resp.statusCode).toEqual(400)
    })

    test("Throws BadRequestError error when user provides email that already exists", async function () {
        const resp = await request(app).post("/auth/register/").send({
          username: "sarahcameron",
          password: "sarahspassword",
          firstName: "sarah",
          lastName: "cameron",
          email: "lebron@james.io"
        })
        expect(resp.statusCode).toEqual(400)
      })

      test("Throws BadRequestError error when user provides username that already exists", async function () {
        const resp = await request(app).post("/auth/register/").send({
          username: "new",
          password: "password123",
          firstName: "sarah",
          lastName: "cameron",
          email: "lebron@james.io"
        })
        expect(resp.statusCode).toEqual(400)
      })
  })
})
