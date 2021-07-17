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
    console.log(" usuarios return :" + json.usuarios)
    return usuarios;
}

const getById = async (id) =>{
    console.log("getById -id: " + id);
    const usuario = await usersModel.findByPk(id);
    if(!usuario){
        throw new error.AppError(exceptions.exceptionType.productos.notFound)
    }

    console.log("user return :" + usuario)
    return usuario;
}

const create = async (data) =>{
    const {estated,username,name} = data;
    console.log("Create User :"+ JSON.stringify({estated,username,name}));
    const user = await userModel.create({
        estated,
        username,
        name
    })

    return user.id;
}

const update = async (id,data) =>{
    const {estated,username,name} = data
    console.log("actualizar produucto"+JSON.stringify({estated,username,name}));
    const user = await userModel.update({estated},{
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