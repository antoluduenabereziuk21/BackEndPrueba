require('dotenv').config()

module.exports = {
//   apiConfig: 'default',

//   apiPrefix: '/api/v1',
  logs: {
    colorize: false,
    level: 'debug',
    file: 'logs/express.log',
    silent: false
  },
  mysql: {
    host: 'localhost',
    port: 3306,
    db: process.env.MYSQL_DB_ENV,
    username: process.env.MYSQL_USER_ENV,
    password: process.env.MYSQL_PASS_ENV
  },
  auth:{
    secret:process.env.SECRET_KEY,
    tokenExpire: process.env.EXPIRE_TOKEN
  }
}
