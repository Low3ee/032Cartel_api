const sql = require("./db.js");
const bcrypt = require("bcrypt");

class UserModel {
    constructor(user) {
      this.first_name = user.fname;
      this.last_name = user.lname;
      this.email = user.email;
      this.user_password = user.password;
      this.id = user.userId;
    }

    static createUser(newUser, result){
        sql.query("INSERT INTO tbl_users SET ?", newUser, (error,response)=>{
            if(error){
                console.log("Error: ", error);
                result(error, null);
                return;
            }
            console.log("New User Created: ", {...newUser });
            result(null, {newUser });
        });
    }

    static logInUser(user, result){
        sql.query("SELECT * FROM tbl_users WHERE email = ? AND user_password = ?", [user.email, user.password], (error,response)=>{
            if(error){
                console.log("Error: ", error);
                result(error, null);
                return;
            }
            console.log("User Logged In: ", { ...response});
            result(null, { user });
        });
    }

    static findUserById(){

    }

    static updateUser(){

    }

    static deleteUser(){

    }
}

module.exports = UserModel;