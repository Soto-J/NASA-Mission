const { loadPlanetsData } = require("./models/planets.model.js");
const http = require("http");
const app = require("./app.js");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// (async () => await loadPlanetsData())();

// server.listen(PORT, () => console.log(`Listening on ${PORT}...`));

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => console.log(`Listening on ${PORT}...`));
}

startServer();
