const { Breweries } = require("../models");
const { Op } = require("sequelize");

// Controllers
const getBreweries = async (req, res) => {
  const { name, zip } = req.query;

  const breweries = await Breweries.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
      postal_code: {
        [Op.like]: `%${zip}%`,
      },
    },
    limit: 25,
  })
    .then((data) => data)
    .catch((error) => {
      console.log(error.message);
      return res.sendStatus(500);
    });

  return res.status(200).json(breweries);
};

module.exports = {
  getBreweries,
};
