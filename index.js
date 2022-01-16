const cors = require("cors");
const express = require("express");
const { authenticate, authorize } = require("./middleware/auth.js");
const app = express();

// APP SETTINGS
app.use(
  cors({
    origin: ["http://localhost:3000"],
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
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
  console.log(process.env.DATABASE_URL);
  console.log(process.env.NODE_ENV !== "production");
});
