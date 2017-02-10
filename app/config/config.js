/**
 * Created by D.Musev on 27.10.2016 г..
 */
const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/TestDBConn',
    port: 8081
  },
  production: {
    rootPath: rootPath,
    db: process.env.MONGO_DB_CONN_STRING,
    port: process.env.port
  }
}