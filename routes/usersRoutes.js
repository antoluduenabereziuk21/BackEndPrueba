const express = require('express');
const router =  express.Router();

const routeController = require('../common/routeController');
const userController = require('../controller/userController');

router.get('/', (req, res) =>{
    routeController.handleRequest(req, res,userController.getAll)
})
router.get('/:id', (req, res) =>{
    routeController.handleRequest(req, res,userController.getById)
})

module.exports = router;