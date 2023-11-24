const products = require("../models/product.model.js");


//create new product call
exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Contents can't be empty.",
      });
    } else {
      const product = new products({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      });
  
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
