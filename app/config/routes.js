/**
 * Created by D.Musev on 27.10.2016 г..
 */

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

let controllers = require('./../controllers/index')

module.exports = (app) => {
  // server routes/authentication/api calls
  app.get('/api/users', controllers.users.getUsers)

  app.post('/api/users/authenticate', controllers.users.authenticate)

  app.post('/api/users/create', controllers.users.create)
  app.post('/api/users/logout', controllers.users.logout)

  // TODO: implement global controllers function handler
  // app.all('api/:controller/:method/:id', (req, res) => {
  //   controllers[req.params.controller].req.params.method(id)
  // })

  app.get('/', controllers.home.index)

  app.all('*', controllers.home.index)
}

