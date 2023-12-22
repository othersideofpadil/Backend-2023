// import mysql
const mysql = require("mysql");

// import dotenv dan jalankan method config
require("dotenv").config();

// destructing object process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// update konfigurasi database dari file .env
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

/**
 * Connect ke database menggunakan method connect.
 * Menerima parameter callback
 */
db.connect((err) => {
  if (err) {
    console.log("Error connecting " + err.stack);
    return;
  } else {
    console.log("Connected to database");
    return;
  }
});

module.exports = db;
