const cors = require("cors");
const express = require("express");
const dbConfig = require("./config/db.config.js");
const { authenticate } = require("./middleware/auth.js");
const app = express();

// APP SETTINGS
app.use(
  cors({
    origin: ["https://goodbrews.noahgothacked.com"],
  })
);
app.use(express.json());

// ROUTES
app.get("/", authenticate, async (req, res) => {
  return res.sendStatus(200);
});
app.use("/api/auth", require("./routes/auth.route.js"));
app.use("/api/user", require("./routes/user.route.js"));
app.use("/api/breweries", require("./routes/breweries.routes"));

// SETUP DB
const db = require("./models/index.js");
db.sequelize.sync();

/* DEV ONLY */
// db.sequelize.sync({ force: true }).then(async () => {
//   await seed();
//   console.log("Drop and re-sync db...");
// });

// START SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
