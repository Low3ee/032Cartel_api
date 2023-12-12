const sql = require("./db.js");
const bcrypt = require("bcrypt");

class UserModel {
  constructor(user) {
    this.user_fname = user.first_name;
    this.user_lname = user.last_name;
    this.user_email = user.email;
    this.user_password = user.user_password;
    this.user_id = user.user_id;
  }

  static createUser(newUser, result) {
    sql.query("INSERT INTO tbl_users SET ?", newUser, (error, response) => {
      if (error) {
        console.log("Error: ", error);
        result(error, null);
        return;
      }
      console.log("New User Created: ", { ...newUser });
      result(null, { newUser });
    });
  }

  static logInUser(user, result) {
    sql.query(
      "SELECT * FROM tbl_users WHERE user_email = ? AND user_password = ?",
      [user.user_email, user.user_password],
      (error, response) => {
        if (error) {
          console.log("Error: ", error);
          result(error, null);
          return;
        }

        if (!response || response.length === 0) {
          result({ message: "User not found" }, null);
          return;
        }

        console.log("User Logged In: ", { ...response[0] });
        result(null, { user: response[0] });
      }
    );
  }

  static findUserById(userId, result) {
    sql.query("SELECT * FROM tbl_users WHERE user_id = ?", userId, (error, response) => {
      if (error) {
        console.log("Error: ", error);
        result(error, null);
        return;
      }

      if (!response || response.length === 0) {
        result({ message: "User not found" }, null);
        return;
      }

      console.log("User Found by ID: ", { ...response[0] });
      result(null, { user: response[0] });
    });
  }

  static updateUser(updatedUser, result) {
    sql.query(
      "UPDATE tbl_users SET user_fname = ?, user_lname = ?, user_email = ?, user_password = ? WHERE user_id = ?",
      [updatedUser.user_fname, updatedUser.user_lname, updatedUser.user_email, updatedUser.user_password, updatedUser.user_id],
      (error, response) => {
        if (error) {
          console.log("Error: ", error);
          result(error, null);
          return;
        }

        console.log("User Updated: ", { ...updatedUser });
        result(null, { updatedUser });
      }
    );
  }

  static deleteUser(userId, result) {
    sql.query("DELETE FROM tbl_users WHERE user_id = ?", userId, (error, response) => {
      if (error) {
        console.log("Error: ", error);
        result(error, null);
        return;
      }

      console.log("User Deleted");
      result(null, { message: "User deleted successfully" });
    });
  }
}

module.exports = UserModel;
