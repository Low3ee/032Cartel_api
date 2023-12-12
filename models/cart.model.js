const sql = require("./db.js");

class Cart {
    constructor(cart) {
      this.userId = cart.userId;
      this.productId = cart.productId;
      this.quantity = cart.quantity;
    }
  
    static addToCart(item, result) {
      sql.query("INSERT INTO tbl_cart SET ?", item, (error, response) => {
        if (error) {
          console.log("Error: ", error);
          result(error, null);
          return;
        }
  
        console.log("New Product Added to Cart: ", { id: response.cart_id, ...item });
        result(null, { id: response.cart_id, ...item });
      });
    }

    static viewCart = (userId, callback) => {
        let query = "SELECT * FROM tbl_cart WHERE user_id = ?";
        console.log("user id:", userId);
        sql.query(query, [userId], (error, result) => {
            if (error) {
                console.log("error: ", error);
                callback(error, null);
                return;
            }
    
            console.log("Products: ", result);
            callback(null, result);
        });
    };
    

    static delete = (result, product_id) => {
      let query = "DELETE * FROM tbl_products WHERE product_id = ?";
  
      sql.query(query, product_id, (e, res) => {
          if (e) {
            console.log("error: ", e);
            result(null, e);
            return;
          }
      
          console.log("Product Deleeted: ", res);
          result(null, res);
        });
  };
  }

module.exports = Cart;