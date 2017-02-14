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
        // TODO: Implement proper error handling
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
    console.log(req.body)
    UserModel
        .findOne({ username: userCred.username }, function(err, user) {
            console.log(user);
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
            res.redirect('/')
            res.end()
            return
        } else {
            res.send({ success: true, user: req.body.username, msg: 'Authentication passed. User found.' })
        }
    })
}

module.exports = {
    getUsers: getUsers,
    create: createUser,
    authenticate: authenticate,
    logout: logout
}