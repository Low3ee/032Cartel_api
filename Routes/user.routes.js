module.exports = app => {

    const usersController = require('../controllers/users.controller.js');
    const multer = require('multer');
    const upload = multer();

    var router = require('express').Router();

    router.post("/user/login", upload.none(), usersController.loginUser);
    router.post("/user/register", upload.none(), usersController.registerUser);

    app.use('/api/users', router);
    
};
