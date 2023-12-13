const users = require("../models/user.model.js");

exports.registerUser = (req, res) => {
  if (!req.body || !req.body.email || !req.body.first_name || !req.body.last_name || !req.body.password) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  const user = {
    user_fname: req.body.first_name,
    user_lname: req.body.last_name,
    user_email: req.body.email,
    user_password: req.body.password,
  };

  console.log("User registering:", user);

  users.createUser(user, (error, data) => {
    if (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({
        message: error.message || "An error occurred while creating the account.",
      });
    }

    console.log("User registered data:", data);

    return res.status(201).json({
      message: "User registered successfully.",
      data: data,
    });
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
    return res.status(200).json({"data" : data});
  });
};
