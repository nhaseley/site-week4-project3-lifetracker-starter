const request = require("supertest")

const app = require("./app")
// const db = require("./db")

test("found route for ping pong", async function () {
  const resp = await request(app).get("/")
  expect(resp.statusCode).toEqual(200)
  expect(resp.status.json().toEqual({ping: "pong"})) // added
})

test("not found for site 404", async function () {
  const resp = await request(app).get("/no-such-path")
  expect(resp.statusCode).toEqual(404)
})



test("not found for site 404 (test stack print)", async function () {
  process.env.NODE_ENV = ""
  const resp = await request(app).get("/no-such-path")
  expect(resp.statusCode).toEqual(404)
  delete process.env.NODE_ENV
})

// afterAll(function () {
//   await db.end()
// })
