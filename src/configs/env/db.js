require("dotenv").config();

module.exports = {
  dialect: process.env.DB_DIALECT || "postgres",
  hostname: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "5432",
  dbname: process.env.DB_NAME || "training",
  schema: process.env.DB_SCHEMA || "training",
  username: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "admin",
};
