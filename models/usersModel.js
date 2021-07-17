const Sequelize = require('sequelize')
const { sequelizeConnection }= require('../config/server/sequelizeConfig')
// const constants = require("../common/constants")

const usersModel = sequelizeConnection.define(
  'usarios',
  {
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'name'
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'last_name'
    },
//     categoria: {
//       type: Sequelize.INTEGER,
//       allowNull: true,
//       field: 'categoria'
//     },
//     estado: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       field: 'estado',
//       defaultValue: constants.estado.ACTIVO
//     },
  },
  {
    tableName: 'user',
    timestamps: false
  }
)
module.exports = usersModel
