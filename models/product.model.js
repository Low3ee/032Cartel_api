const sql = require("./db.js");

const Product = function(product) {
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
};

Product.create = (newProduct, result) => {
    sql.query("INSERT INTO tbl_products SET ?", newProduct, (e, res) => {
        if (e) {
            console.log("error: ", e);
            result(e, null);
            return;
        }
        console.log("New Product Created: ", {id: result.insertId, ...newProduct})
        result(null, {id: result.insertId, ...newProduct });
    })
}


Product.getAll = (result) => {
    let query = "SELECT * FROM tbl_products";

    sql.query(query, (e, res) => {
        if (e) {
          console.log("error: ", e);
          result(null, e);
          return;
        }
    
        console.log("Products: ", res);
        result(null, res);
      });
};

module.exports = Product;