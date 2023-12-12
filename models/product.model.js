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
        
            result(null, res);
          });
    };
    
    static getFeatured = (result) => {
        let query = "SELECT * FROM tbl_products WHERE featured != 0";
    
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

module.exports = Product;