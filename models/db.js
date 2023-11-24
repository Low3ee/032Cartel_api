const mysql = require('mysql2');
const config = require('../config/db_config.js');

const connection = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
});


connection.connect(e => {
    if (e) throw e;
    console.log("DB Connection Successful.")
})

module.exports = connection;