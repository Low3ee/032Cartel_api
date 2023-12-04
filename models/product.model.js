const sql = require("./db.js");

class Product {
    constructor(product) {
      this.name = product.name;
      this.description = product.description;
      this.price = product.price;
      this.category = product.category;
    }
  
    static create(newProduct, result) {
      sql.query("INSERT INTO tbl_products SET ?", newProduct, (error, response) => {
        if (error) {
          console.log("Error: ", error);
          result(error, null);
          return;
        }
  
        console.log("New Product Created: ", { id: response.insertId, ...newProduct });
        result(null, { id: response.insertId, ...newProduct });
      });
    }

    static getAll = (result) => {
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
    
    static getFeatured = (result) => {
        let query = "SELECT * FROM tbl_products WHERE featured = true";
    
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
  }

module.exports = Product;