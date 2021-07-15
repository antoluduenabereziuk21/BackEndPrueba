const userModel = require('../models/users');
const error = require('../common/error');
const exceptions = require('../common/exceptions');


const getAllService = async({username,estated})=>{

    console.log("getAllService - username"+username +"  estated: " + estated)
    // const where = {}
    // if (estated){
    //     where.estated = estated; 
    // }
    // if (username){
    //     where.username = username;
    // }

    // const usuarios = await userModel.find({atributes:['username','estated'],
    // where:where});
    const usuarios = await userModel.find({username,estated})
    console.log(" usuarios return :" + usuarios)
    return usuarios;
}

const getById = async (id) =>{
    console.log("getById -id: " + id);
    const usuario = await userModel.findById(id);
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