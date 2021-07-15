const usersServices = require('../services/usersServices');
const exceptions =require('../common/exceptions');
const error = require('../common/error');

const getAll = async (req,res)=>{
    const query = req.query
    console.log("get all controller - query : "+JSON.stringify(query))
    if(!req.query.estated){
        throw new error.AppError(exceptions.exceptionType.productos.badRequest,"debe colocar un estado")
    }
    const filter = {
        estated: req.query.estated,
    }
    if(req.query.username){
        filter.username = req.query.username
    }
    //llamar al servicio de productos
    const usuarios= await usersServices.getAllService(filter)
    res.status(200).json(usuarios)
}

const getById = async (req,res)=>{
    const params = req.params
    console.log("get all controller - params : "+JSON.stringify(params))
    const id = params.id
    //llamar al servicio de productos
    const users = await usersServices.getById(id)
    res.status(200).json(users)
}

const create = async (req,res)=>{
    const data = req.body
    console.log("create controller - body : "+JSON.stringify(data))
    const userId = await usersServices.create(data)
    res.status(201).json({userId})
}

const actualizar = async (req,res)=>{
    const data = req.body
    const params = req.params
    console.log("actualizar controller - params : "+JSON.stringify(params))
    const id = params.id
    console.log("actualizar controller - body : "+JSON.stringify(data))
    const actualizado = await usersServices.actualizar(id,data)
    res.status(200).json({actualizado})
}

module.exports = {
    getAll,
    getById,
    create,
    actualizar
}