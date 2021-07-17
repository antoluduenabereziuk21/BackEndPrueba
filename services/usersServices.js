const userModel = require('../models/userModel');
const error = require('../common/error');
const exceptions = require('../common/exceptions');

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

const create = async (data) =>{
    const {user_name,name,last_name,country,city,email,condition} = data;
    console.log("Create User :"+ JSON.stringify({user_name,name,last_name,country,city,email,condition}));
    const user = await userModel.create({
        user_name,
        name,
        last_name,
        country,
        city,
        email,
        condition
    })

    return user.id;
}

const update = async (id,data) =>{
    const {user_name,name,last_name,country,city,email,condition} = data;
    console.log("actualizar produucto"+JSON.stringify({user_name,name,last_name,country,city,email,conditio}));
    const user = await userModel.update({condition},{
        where: {
            id
        }
    });
    if (!user){
        return false
    }
    return true
}


module.exports = {
    getAllService,
    getById,
    create,
    update
}