const usersServices = require('../services/usersServices');
const exceptions =require('../common/exceptions');
const error = require('../common/error');
//los metodos de usuarios 
const getAll = async (req,res)=>{
    const query = req.query
    console.log("get all controller - query : "+JSON.stringify(query))
    if(!req.query.condition){
        throw new error.AppError(exceptions.exceptionType.productos.badRequest,"debe colocar un estado 0 ó 1")
    }
    const filter = {
        condition: req.query.condition,
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
    console.log("getById controller - params : "+JSON.stringify(params))
    const id = params.id
    //llamar al servicio de usuarios
    const usuarios = await usersServices.getById(id)
    res.status(200).json(usuarios)
}

// const create = async (req,res)=>{
//     const data = req.body
//     console.log("create controller - body : "+JSON.stringify(data))
//     const userId = await usersServices.create(data)
//     res.status(201).json({userId})
// }

const create = async (req,res) => {
    const data = req.body
    console.log("INIT CREATE USER  data:" + JSON.stringify(data))
    if(!data.user_name){
        console.log("no name in  CREATE USER  data:" + JSON.stringify(data))
        throw new error.AppError(exceptions.exceptionType.badRequest)
    } 
    if(!data.password){
        console.log("no pass in  CREATE USER  data:" + JSON.stringify(data))
        throw new error.AppError(exceptions.exceptionType.badRequest)
    } 
    const newUser = await usersServices.create(data);
    console.log(JSON.stringify(newUser))
    return res.status(201).json(newUser)
}

const login = async (req, res) => {
    const data = req.body
    console.log("login - data:" + JSON.stringify(data))
    const userInfo = await usersServices.login(data)
    res.json(userInfo)
}
// const updated = async (req,res)=>{
//     const data = req.body
//     const params = req.params
//     console.log("actualizar controller - params : "+JSON.stringify(params))
//     const id = params.id
//     console.log("actualizar controller - body : "+JSON.stringify(data))
//     const actualizado = await usersServices.updated(id,data)
//     res.status(200).json({actualizado})
// }

// const deleted = async (req,res)=>{
//     const params = req.params
//     console.log("Deleted controller - params : "+JSON.stringify(params))
//     const id = params.id
//     //llamar al servicio de usuarios
//     const usuarios = await usersServices.deleted(id)
//     res.status(200).json({usuarios}) 
// }
module.exports = {
    getAll,
    getById,
    create,
    login
    // updated,
    // deleted
}