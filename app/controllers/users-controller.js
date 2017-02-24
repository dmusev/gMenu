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
    let userExists;
    UserModel.findOne({ username: req.body.username }).then(user => {
        userExists = (user ? true : false);
    })
    if (User.password && !userExists) {
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
        .findOne({ username: userCred.username }, function(err, user) {
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
    let userRole = user.role,
        username = user.username,
        msgOnSuccess = 'Authentication passed. User found.';

    req.login(user, (err, user) => {
        // TODO: Implement proper error handling
        if (err) {
            res.redirect('/')
            res.end()
            return
        } else {
            res.send({
                success: true,
                user: username,
                role: userRole,
                msg: msgOnSuccess
            })
        }
    })
}

module.exports = {
    getUsers: getUsers,
    create: createUser,
    authenticate: authenticate,
    logout: logout
}