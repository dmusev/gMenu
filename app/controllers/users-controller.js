/**
 * Created by D.Musev on 31.10.2016 г..
 */
let UserModel = require('./../models/User').User
let encryption = require('./../utilities/encryption')

let getUsers = (req, res) => {
  UserModel.find((err, users) => {
    if (err) res.send(err)

    res.json(users)
  })
}

let createUser = (req, res) => {
  let User = req.body

  if (User.password !== User.confirmPassword) {
    // TODO: Implement propwe error handling
    res.send('Passwords do not match!')
  } else {
    User.salt = encryption.generateSalt()
    User.hashedPwd = encryption.generateHashedPassword(User.salt, User.password)
    UserModel
      .create(User)
      .then(user => logUserIn(user, req, res))
  }
}

let authenticate = (req, res) => {
  let userCred = req.body
  UserModel
    .findOne({ username: userCred.username }, (user) => {
      if (!user.authenticate(userCred.password)) {
        res.redirect('/login')
      } else {
        logUserIn(user, req, res)
      }
    })
}

let logout = (req, res) => {
  req.logout()
  res.redirect('/')
}

// Private functions
let logUserIn = (user, req, res) => {
  req.login(user, (err, user) => {
    // TODO: Implement proper error handling
    if (err) {
      console.log(err)
      res.redirect('/login')
      res.end()
      return
    } else {
      res.redirect('/')
    }
  })
}

module.exports = {
  getUsers: getUsers,
  create: createUser,
  authenticate: authenticate,
  logout: logout
}
