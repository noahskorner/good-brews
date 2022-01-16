require("dotenv").config();
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const initModels = require("./init-models");

const sequelize =
  process.env.NODE_ENV !== "production"
    ? new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        logging: false,
      })
    : new Sequelize(dbConfig.connectionString, {
        dialect: dbConfig.dialect,
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        logging: false,
      });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

const { breweries, refresh_tokens, users } = initModels(sequelize);

db.Breweries = breweries;
db.RefreshTokens = refresh_tokens;
db.Users = users;

module.exports = db;
