const { Breweries } = require("../models");
const { Op } = require("sequelize");

// Controllers
const getBreweries = async (req, res) => {
  const { name, zip } = req.query;

  const breweries = await Breweries.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
      postal_code: {
        [Op.iLike]: `%${zip}%`,
      },
    },
    limit: 50,
  })
    .then((data) => data)
    .catch((error) => {
      console.log(error.message);
      return res.sendStatus(500);
    });

  return res.status(200).json(breweries);
};

const getBrewery = async (req, res) => {
  try {
    const obdb_id = req.params.id;

    if (!obdb_id) return res.sendStatus(400);

    const brewery = await Breweries.findOne({
      where: {
        obdb_id,
      },
    })
      .then((data) => data)
      .catch((error) => {
        console.log(error);
        return res.sendStatus(500);
      });

    if (!brewery) return res.sendStatus(400);

    return res.status(200).json(brewery);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

module.exports = {
  getBreweries,
  getBrewery,
};
