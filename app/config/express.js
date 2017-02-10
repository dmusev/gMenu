/**
 * Created by D.Musev on 31.10.2016 г..
 */
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

module.exports = (app, config) => {
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: true })) // parse application/x-www-form-urlencode
  app.use(bodyParser.json())// get data from body parameters and parse application/json
  app.use(session({
    secret: 'smt-secret!~@$%^#',
    resave: true,
    saveUninitialized: true
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(express.static(config.rootPath + '/public'))// set static files location /public/img => /img
  app.use(methodOverride('X-HTTP-Method-Override'))// override the header in the request aka simulate DELETE
}
