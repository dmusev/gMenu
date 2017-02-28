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
    UserModel.findOne({ username: req.body.username }, function(err, user) {
        if (user) {
            res.status(409).send({
                message: 'User exists!'
            });
        } else if (User.password && User.username && User.role) {
            User.salt = encryption.generateSalt()
            User.hashedPwd = encryption.generateHashedPassword(User.salt, User.password)
            UserModel
                .create(User)
                .then(user => logUserIn(user, req, res))
        } else {
            res.status(400).send({
                message: 'Not a proper request!'
            });
        }
    })
}

let authenticate = (req, res) => {
    let userCred = req.body
    UserModel
        .findOne({ username: userCred.username }, function(err, user) {
            if (!user || !user.authenticate(userCred.password)) {
                res.status(404).send({
                    message: 'Non-existing user!'
                });
                return;
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
        if (err) {
            res.status(500).send({
                message: 'Cannot log in current user!'
            });
            return;
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