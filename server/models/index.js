require("dotenv").config();
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const initModels = require("./init-models");

const sequelize = process.env.DEV_MODE
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
          rejectUnauthorized: dbConfig.rejectUnauthorized,
        },
      },
      logging: false,
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

const { breweries, refreshTokens, users } = initModels(sequelize);

db.Breweries = breweries;
db.RefreshTokens = refreshTokens;
db.Users = users;

module.exports = db;
