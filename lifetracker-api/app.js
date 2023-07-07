/** Express app for Vaccine Hub */
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const { parseAuthorizationHeader } = require("./middleware/security")
const { NotFoundError } = require("./utils/errors")
const config = require("./config")
const authRoutes = require("./routes/auth")

const app = express()


// enable cross-origin resource sharing for all origins for all requests
app.use(cors())
// parse incoming requests with JSON payloads
app.use(express.json())
// log requests info

//app.use(morgan("tiny"))

// routes
app.use("/auth", authRoutes)

app.get("/", function (req, res) {
  return res.status(200).json({
    ping: "pong",
  })
})

const user = require('./models/user')

/** Handle 404 errors -- this matches everything */
// app.use(function (req, res, next) {
//   console.log("error here")
//   const message = "not found"
//   const status = 404
//   res.send({message: message, status: status})
//   return next(new NotFoundError())
//   next(new NotFoundError())
// })

/** Generic error handler; anything unhandled goes here. */
// app.use(function (err, req, res, next) {
//   if (!config.IS_TESTING) console.error(err.stack)
//   const status = 500
//   const message = err.message

//   return res.status(status).json({
//     error: { message, status },
//   })
// })

module.exports = app