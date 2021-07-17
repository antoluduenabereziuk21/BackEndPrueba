const Sequelize = require('sequelize')
const config = require('config')
const sequelizeConnection = new Sequelize(
  config.get('mysql.db'),
  config.get('mysql.username'),
  config.get('mysql.password'),
  
  {
    host: config.get('mysql.host'),
    port: config.get('mysql.port'),
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: 0,
  },
  
)

module.exports = {
  sequelizeConnection
}
