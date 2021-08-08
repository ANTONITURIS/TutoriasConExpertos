require('dotenv').config();

module.exports = {
  dbUser: process.env.DB_USER,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbHost: process.env.HOST,
  dbPassword: process.env.DB_PASSWORD,
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
};
