const routes = require('express').Router();

const userController = require('./controllers/userController');

routes.post('/', userController.create);
routes.get('/get-studant/:id', userController.getStudantById);
routes.put('/update/:id', userController.updateStudant);
routes.delete('/delete/:id', userController.deleteStudant);
routes.get('/see-all', userController.listAllRegisters);

// Rotas de Ordenação
routes.get('/order-by-id', userController.orderPerId);
routes.get('/order-by-name', userController.orderByName);


module.exports = routes;
