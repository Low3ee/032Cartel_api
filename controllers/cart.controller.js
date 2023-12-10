const Cart = require("../models/cart.model.js");
const cart = require("../models/cart.model.js");
  
//create new product call
exports.add = (req, res) => {
  if (!req.body || !req.body.productId) {
    res.status(400).send({
      message: "Product not found",
    });
  } else {
    const cart = {
      product_id: req.body.productId,
      user_id: req.body.userId,
    };

    cart.addToCart(product, (e, data) => {
      if (e) {
        res.status(500).send({
          message: e.message || "An error occurred while adding the product to cart.",
        });
      } else {
        res.status(201).json(data);
      }
    });
  }
};
  
//get all products call
exports.viewCart = (req, res) => {
    Cart.viewCart(req.params.userId, (error, products) => {
        if (error)
            res.status(500).send({
                message: error.message || "An error occurred while getting the products.",
            });
        else
            res.send(products);
    });
};
