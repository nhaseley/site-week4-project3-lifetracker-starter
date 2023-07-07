const { UnauthorizedError } = require("../utils/errors")
const User = require("../models/user")

const parseAuthorizationHeader = (req, res, next) => {
    if (!req.headers.authorization) {
        console.error('Authorization not set :(')
        res.send({message: "Missing authorization token", status: 401 })
        return
    }
    const token = req.headers.authorization?.split(' ')[1]
    return user = token ? User.verifyAuthToken(token): res.send({message: "Missing authorization token", status: 401 })
}

const requireAuthenticatedUser = (req, res, next) =>{
    // console.log("res locals user" , res.locals.user)
    if (!res.locals.user){
        return next(new UnauthorizedError("Not logged in"))
    }
    return next()

}

module.exports = {parseAuthorizationHeader, requireAuthenticatedUser};