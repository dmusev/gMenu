// modules
const express = require('express')
let app = express()

// environment
let env = process.env.NODE_ENV || 'development'

let config = require('./app/config/config')[env]

require('./app/config/database')(config) // configure mongo db
require('./app/config/express')(app, config) // configure express app
require('./app/config/routes')(app) // configure our routes
require('./app/config/passport')()

app.listen(config.port)

console.log('App is listening on port: ' + config.port)

// exposing app
exports = module.exports = app