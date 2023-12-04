const users = require("../models/user.model.js");
  
//create new user call
exports.registerUser = (req, res) => {
  if (!req.body || !req.body.email) {
    res.status(400).send({
      message: "Email is required.",
    });
  } else {
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      user_password: req.body.password,
    };

    users.createUser(user, (e, data) => {
      if (e) {
        res.status(500).send({
          message: e.message || "An error occurred while creating the account.",
        });
      } else {
        res.status(201).json(data);
      }
    });
  }
};


  exports.loginUser = (req, res) => {
    if (!req.body || !req.body.email) {
      res.status(400).send({
        message: "Email is required.",
      });
    } else {
      const user = {
        email: req.body.email,
        password: req.body.password,
      };
  
      users.logInUser(user, (e, data) => {
        if (e) {
          res.status(500).send({
            message: e.message || "An error occurred while creating the account.",
          });
        } else {
          res.status(201).json(data);
        }
      });
    }
};