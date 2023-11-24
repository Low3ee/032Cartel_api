module.exports = app => {

    const productsController = require('../controllers/products.controller.js');

    var router = require('express').Router();

    router.post("/", productsController.create);

    router.get("/", productsController.getAll);

    app.use('/api/products', router);
    
};
