/**
 * Created by D.Musev on 31.10.2016 г..
 */

const crypto = require('crypto')

module.exports = {
  generateSalt: () =>
    crypto.randomBytes(128).toString('base64'),
  generateHashedPassword: (salt, pwd) =>
        crypto.createHmac('sha256', salt).update(pwd).digest('hex')
}
