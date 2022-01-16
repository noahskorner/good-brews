const router = require("express").Router();
const {
  getBreweries,
  getBrewery,
} = require("../controllers/breweries.controller");

router.get("/", getBreweries);
router.get("/:id", getBrewery);

module.exports = router;
