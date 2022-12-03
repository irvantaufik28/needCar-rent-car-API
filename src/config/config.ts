require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_USER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};

DB_HOST = localhost;
DB_PORT = 3000;
DB_NAME = testDB;
DB_USER = postgres;
DB_PASS = admin;
