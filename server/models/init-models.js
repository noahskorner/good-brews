var DataTypes = require("sequelize").DataTypes;
var _breweries = require("./breweries");
var _refresh_tokens = require("./refresh_tokens");
var _users = require("./users");

function initModels(sequelize) {
  var breweries = _breweries(sequelize, DataTypes);
  var refresh_tokens = _refresh_tokens(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  refresh_tokens.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(refresh_tokens, { as: "refresh_tokens", foreignKey: "user_id"});

  return {
    breweries,
    refresh_tokens,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
