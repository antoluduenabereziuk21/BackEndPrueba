const express = require('express');
const router =  express.Router();

const routeController = require('../common/routeController');
const userController = require('../controller/userController');

//las rutas del usuario

router.get('/', (req, res) =>{
    routeController.handleRequest(req, res,userController.getAll)
})
router.get('/:id', (req, res) =>{
    routeController.handleRequest(req, res,userController.getById)
})
router.post('/', (req, res) =>{
    routeController.handleRequest(req, res,userController.create)
})
router.patch('/:id', (req, res) =>{
    routeController.handleRequest(req, res,userController.updated)
})

router.delete('/:id', (req, res) =>{
    routeController.handleRequest(req, res,userController.deleted)
})

module.exports = router;