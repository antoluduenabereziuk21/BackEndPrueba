const userModel = require('../models/userModel');
const error = require('../common/error');
const exceptions = require('../common/exceptions');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require("config")
// const logger = require('../config/server/logger')(__filename)


const create = async ({user_name, password,name,last_name,country,city,email,condition}) => {
    // logger.info(`createUser - userName[${userName}]`)
    console.log("createUser - userName["+ user_name+"]");

const userExist = await userModel.findOne({where: {user_name:user_name.toLowerCase()}});
if(userExist){
  throw new error.AppError(exceptions.exceptionType.users.userExists);
}

    const data = {
      user_name:user_name.toLowerCase(),
      password:encryptPassword(password),
      name,
      last_name,
      country,
      city,
      email,
      condition,
      createdAt:new Date(),
      updatedAt: new Date()
    }
    console.log("createUser - data["+ JSON.stringify(data)+"]");
    try {
      return await userModel.create(data)
    } catch (e) {
      const errorMessage = `Create User - Detail: ` + e.message
      // logger.error(errorMessage)
      console.error("createUser - user_name["+ user_name+"]");
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeCreated, errorMessage)
    }
  }

  const encryptPassword = userPassword => {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(userPassword, salt)
  }

  const comparePass = (userPass, hashedPass) => {
    return bcrypt.compare(userPass,hashedPass)
  }

//el comunicador entre el controlador y la base de datos

const getAllService = async({condition,email})=>{

    console.log("getAllService - condition : "+condition +"  email: " + email)
    const where = {}
    if (condition){
        where. condition =  condition; 
    }
    if (email){
        where.email = email;
    }

    const usuarios = await userModel.findAll({atributes:[' condition','email'],
    where:where});
    // const usuarios = await userModel.findAll({condition,email})
    console.log(" usuarios return :" +usuarios)
    return usuarios;
}

const getById = async (id) =>{
    console.log("getById -id: " + id);
    const usuario = await userModel.findByPk(id);
    if(!usuario){
        throw new error.AppError(exceptions.exceptionType.productos.notFound)
    }

    console.log("user return :" + usuario)
    return usuario;
}

// const create = async (data) =>{
//     const {user_name,name,last_name,country,city,email,condition} = data
//     console.log("Create User :"+ JSON.stringify({user_name,name,last_name,country,city,email,condition}));
//     const usuario = await userModel.create({
        
//         user_name,
//         name,
//         last_name,
//         country,
//         city,
//         email,
//         condition
//     })

//     return usuario.id_user;
// }

const login = async ({user_name, password}) => {
    console.log("login - user_name["+ user_name+"]"+ " - password["+ password+"]" );
    const user = await userModel.findOne({where: {user_name:user_name.toLowerCase()}})
    const isMatch = user && (await comparePass(password,user.password))
    if(!isMatch){
      throw new error.AppError(exceptions.exceptionType.users.invalidPassword,"userService.login")
    }
    const token = generateToken(user.id_user,user.user_name)
    return {token}
}
const generateToken = (id_user,user_name) =>{
    return jwt.sign({
      id_user:id_user,
      user_name:user_name,
      rol:"ADMIN"
    },config.get("auth.secret"),{
      expiresIn: config.get("auth.tokenExpire")
    })
}



const updated = async (id,data) =>{
    const {user_name,name,last_name,country,city,email,condition} = data;
    console.log("actualizar produucto"+JSON.stringify({user_name,name,last_name,country,city,email,condition}));
    const user = await userModel.update({condition},{
        where: {
            id_user: id
        }
    });
    if (!user){
        return false
    }

    return true
}

const deleted= async (id) =>{
    console.log("Deleted -id: " + id);
    const id_user = id
    const usuario = await userModel.destroy(
        {
            where:{
                id_user:id_user
            }
        }
    )
    if(!usuario){
        throw new error.AppError(exceptions.exceptionType.productos.notFound)
    }

    console.log("deleted return :" + id_user)
    return "user deleted :"+id_user;
}


module.exports = {
    getAllService,
    getById,
    create,
    login,
    updated,
    deleted
}