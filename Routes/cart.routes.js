module.exports = app => {

    const cartController = require('../controllers/cart.controller.js');
    const multer = require('multer');
    const upload = multer();

    var router = require('express').Router();

    router.get('/view/:userId', cartController.viewCart);

    app.use('/api/cart', router);
    
};
