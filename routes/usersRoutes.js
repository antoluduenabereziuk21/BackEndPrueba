const exports = require('express');
const router =  express.Router();

const routeController = require('');
const userController = require('');

router.get('/', (req, res) =>{
    routeController.handleRequest(req, res,productController.getAll)
})

module.exports = router;