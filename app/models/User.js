// grab mongoose
let mongoose = require('mongoose')
let encryption = require('../utilities/encryption')

let requiredValidationMessage = '{PATH} is required'

// define our User schema
let userSchema = mongoose.Schema({
    username: { type: String, required: requiredValidationMessage, unique: true },
    firstName: { type: String, required: requiredValidationMessage },
    lastName: { type: String, required: requiredValidationMessage },
    salt: String,
    hashedPwd: String,
    roles: [String]
})

// user schema methods go here
userSchema.method({
        authenticate: function(password) {
            if (encryption.generateHashedPassword(this.salt, password) === this.hashedPwd) {
                return true
            } else {
                return false
            }
        }
    })
    // export the model to be used in other files
let User = mongoose.model('User', userSchema)

module.exports = {
    User: User,
    // Only creates seed admin if there 0 users in the DB..
    seedAdminUser: () => {
        User.find({}).then(users => {
            if (users.length === 0) {
                let salt = encryption.generateSalt()
                let hashedPwd = encryption.generateHashedPassword(salt, 'administrator')

                User.create({
                    username: 'Admin',
                    firstName: 'Admin',
                    lastName: 'Adminov',
                    salt: salt,
                    hashedPwd: hashedPwd,
                    roles: ['Admin']
                })
            }
        })
    }
}