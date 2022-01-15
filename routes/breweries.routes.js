const router = require("express").Router();
const { getBreweries } = require("../controllers/breweries.controller");

router.get("/", getBreweries);

module.exports = router;
