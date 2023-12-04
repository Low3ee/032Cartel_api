const products = require("../models/product.model.js");
  
//create new product call
exports.create = (req, res) => {
  if (!req.body || !req.body.name) {
    res.status(400).send({
      message: "Name is required.",
    });
  } else {
    const product = {
      name: req.body.name,
      description: req.body.description || null,
      price: req.body.price || null,
      category: req.body.category || null,
    };

    products.create(product, (e, data) => {
      if (e) {
        res.status(500).send({
          message: e.message || "An error occurred while creating the product.",
        });
      } else {
        res.status(201).json(data);
      }
    });
  }
};
  
//get all products call
exports.getAll = (req, res) => {
  products.getAll((e, products) => {
    if (e)
      res.status(500).send({
        message: e.message || "An error occurred while getting the products.",
      });
    else res.send(products);
  });
};

//get all featured products call
exports.getFeatured = (req, res) => {
  products.getFeatured((e, products) => {
    if (e)
      res.status(500).send({
        message: e.message || "An error occurred while getting the products.",
      });
    else res.send(products);
  });
};

