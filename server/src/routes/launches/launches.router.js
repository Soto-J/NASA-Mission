const express = require("express");
const {
  httpGetAllLaunches,
  httpGetLaunch,
  httpPostLaunch,
  httpAbortLaunch,
} = require("./launches.controller.js");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.get("/:id", httpGetLaunch);
launchesRouter.post("/", httpPostLaunch);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
