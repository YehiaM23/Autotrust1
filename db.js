const mysql = require('mysql2');
require('dotenv').config();  // Load environment variables from .env file

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = pool.promise();  // Export the pool to use in other files
