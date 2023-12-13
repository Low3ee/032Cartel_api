module.exports = app => {

    const productsController = require('../controllers/products.controller.js');
    const multer = require('multer');
    const upload = multer();

    var router = require('express').Router();

    router.post("/new", upload.any(), productsController.create);

    router.get("/", productsController.getAll);

    router.get("/featured", productsController.getFeatured);

    router.get("/product/delete", productsController.getFeatured);

    router.get("/product/:productId", productsController.viewProductDetail)


    app.use('/api/products', router);
    
};
