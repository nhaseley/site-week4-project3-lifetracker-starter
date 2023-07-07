// const User = require("../models/user")

// const authenticateJWT = async (req, res, next) => {
//     // Extract the token from the authorization header
// //    const token = req.headers.authorization?.split(' ')[1]
  
//    const token = req.data.token
//    console.log("TOKEN HERE: ", token)
//    if (!token) {
//     res.send({message: "Missing authorization token", status: 401 })
//     //    return res.status(401).json({ error: 'Missing authorization token' })
//    }
  
//    try {
//        const decoded = User.verifyAuthToken(token)
  
//        if (!decoded) {
//         return res.status(401).json({ error: 'Invalid token' })
//        }
  
//        const user = await User.fetchUserByEmail(decoded.email)
  
//        if (!user) {
//         return res.status(401).json({ error: 'User not found' })
//        }
  
//        // Attach the user object to the request for further use
//        req.user = user
//        next()
//    } catch (err) {
//         console.log("message: ", err.message)
//         res.send(err)

//     //    return res.status(500).json({ error: 'Internal server error' })
//    }
//   }

//   module.exports = { authenticateJWT }