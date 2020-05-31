const routes = require('express').Router();

const { celebrate, Segments, Joi } = require('celebrate');

const userController = require('./controllers/userController');

routes.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        age: Joi.number().required(),
        phone: Joi.string().required().min(8)
    })
}),
userController.create);

routes.get('/get-studant/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), userController.getStudantById);

routes.put('/update/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string(),
        age: Joi.number(),
        phone: Joi.string()  
    })
}), userController.updateStudant);

routes.delete('/delete/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), userController.deleteStudant);

routes.get('/see-all', userController.listAllRegisters);

// Rotas de Ordenação
routes.get('/order-by-id', userController.orderPerId);

routes.get('/order-by-name', userController.orderByName);


module.exports = routes;
