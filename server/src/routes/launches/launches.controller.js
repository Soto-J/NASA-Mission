const {
  getAllLaunches,
  getLaunch,
  addNewLaunch,
  abortLaunch,
  launchExist,
} = require("../../models/launches.model.js");

// GET /launches
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpGetLaunch(req, res) {
  const launchId = +req.params.id;

  if (!launchExist(launchId)) {
    return res.status(404).json({ error: "Not Found." });
  }

  return res.status(200).json(getLaunch(launchId));
}

// POST /launches
function httpPostLaunch(req, res) {
  const newLaunch = req.body;

  const hasEmptyInput =
    !newLaunch.mission ||
    !newLaunch.launchDate ||
    !newLaunch.rocket ||
    !newLaunch.target;

  // 400 Bad Request
  if (hasEmptyInput) {
    return res.status(400).json({ error: "Cannot be an empty properties." });
  }

  // Convert Date input to Date Object && Validate Date is correct
  const launchDateAsString = newLaunch.launchDate;
  newLaunch.launchDate = new Date(launchDateAsString);
  const inValidDateInput = isNaN(newLaunch.launchDate); // Date Objects are numbers
  
  if (inValidDateInput) {
    return res.status(500).json({ error: "Invalid Date." });
  }

  addNewLaunch(newLaunch);

  return res.status(201).json(newLaunch);
}

function httpAbortLaunch(req, res) {
  const launchId = +req.params.id;

  if (!launchExist(launchId)) {
    return res.status(404).json({ error: "Not Found" });
  }

  const abortedLaunch = abortLaunch(launchId);

  return res.status(200).json(abortedLaunch);
}

module.exports = {
  httpGetAllLaunches,
  httpGetLaunch,
  httpPostLaunch,
  httpAbortLaunch,
};
