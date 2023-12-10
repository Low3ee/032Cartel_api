module.exports = app => {

    const productsController = require('../controllers/products.controller.js');
    const multer = require('multer');
    const upload = multer();

    var router = require('express').Router();

    router.post("/new", upload.none(), productsController.create);

    router.get("/", productsController.getAll);

    router.get("/featured", productsController.getFeatured);

    router.get("/product/delete", productsController.getFeatured);


    app.use('/api/products', router);
    
};
