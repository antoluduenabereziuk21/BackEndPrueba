const passport = require('passport')


// Required authentication
const required = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ code: 5101, message: 'Invalid token' })
    }
    // Pass user to req
    req.user = user
    return next()
  })(req, res, next)
}


module.exports = { required }