const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();

const plantetsRouter = require("./routes/planets/planets.router.js");
const launchesRouter = require("./routes/launches/launches.router.js");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined")); // Defaults to combine format

app.use(express.json()); // Take Json request
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/planets", plantetsRouter);
app.use("/launches", launchesRouter);
// app.use("/launches/:id", launchesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
