/** Express app for Vaccine Hub */
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const { NotFoundError } = require("./utils/errors")
const config = require("./config")
const authRoutes = require("./routes/auth")

const app = express()

// enable cross-origin resource sharing for all origins for all requests
app.use(cors())
// parse incoming requests with JSON payloads
app.use(express.json())
// log requests info
app.use(morgan("tiny"))

// routes
// app.use("/auth", authRoutes)

app.get("/", function (req, res) {
  return res.status(200).json({
    ping: "pong",
  })
})

const user = require('./models/user')

// GET /login - get a specific user from database using their credentials
// router.get('/login', async (req, res) => {
//   const inputCredentials = req.body
//   console.log(inputCredentials)
//   const user = await user.authenticate(inputCredentials)

//   if (user) {
//     res.json(user)
//   } else {
//     res.status(404).json( { error: 'User not found' } )
//   }
// })

// POST /register - create a new user
// router.post('/register', async (req, res) => {
//   const inputCredentials = req.body
//   console.log(inputCredentials)
//   const newUser = await userModel.register(inputCredentials)
//   res.status(201).json(newUser)
// })


/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError())
})

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (!config.IS_TESTING) console.error(err.stack)
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
    error: { message, status },
  })
})

module.exports = app