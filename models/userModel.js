const Sequelize = require('sequelize');
const {sequelizeConnection} = require('../config/server/sequelizeConfig')

const  UserModel = sequelizeConnection.define(
    'User',
{
    id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        fields: 'user_name'
    },
    name: {
        type: Sequelize.STRING,
        allowNull:  false,
        fields: 'name'
    },
    last_name: {
        type:Sequelize.STRING,
        allowNull: false,
        fields: 'last_name'
    },
    country: {
        type:Sequelize.INTEGER,
        allowNull: true,
        fields: 'country'
    },
    city: {
        type:Sequelize.INTEGER,
        allowNull: true,
        fields: 'city'
    },
    email: {
        type:Sequelize.STRING,
        allowNull: true,
        fields: 'email'
    },
    condition: {
        type:Sequelize.STRING,
        allowNull: false,
        fields: 'condition'
    }   
},
{
    tableName:'users',
    timestamps: false
}
)

module.exports = UserModel

