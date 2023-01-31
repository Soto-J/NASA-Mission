const express = require("express");
const { httpGetAllPlanets } = require("./planets.controller.js");

const plantetsRouter = express.Router();

plantetsRouter.get("/", httpGetAllPlanets);

module.exports = plantetsRouter;
