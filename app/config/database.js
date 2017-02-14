let mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = (config) => {
    mongoose.connect(config.db)

    let db = mongoose.connection

    db.once('open', err => {
        if (err) console.warn(err)

        console.log('MongoDB ready')
    })

    db.on('error', err => console.warn('Error with database: ' + err))

    // Seed an admin user.. uncomment only when first starting db then no need of reseeding..
    require('../models/User').seedAdminUser()
}