const users = require("../models/user.model.js");

exports.registerUser = (req, res) => {
  if (!req.body || !req.body.email) {
    return res.status(400).json({
      message: "Email is required.",
    });
  }

  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    user_password: req.body.password,
  };

  users.createUser(user, (error, data) => {
    if (error) {
      return res.status(500).json({
        message: error.message || "An error occurred while creating the account.",
      });
    }

    return res.status(201).json(data);
  });
};

exports.loginUser = (req, res) => {
  if (!req.body || !req.body.email) {
    return res.status(400).json({
      message: "Email is required.",
    });
  }

  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  users.logInUser(user, (error, data) => {
    if (error) {
      return res.status(500).json({
        message: error.message || "An error occurred while creating the account.",
      });
    }

    if (!data || !data.user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.status(200).json(data);
  });
};
