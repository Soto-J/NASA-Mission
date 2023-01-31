const launches = new Map();
const launch1 = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  launchDate: new Date("December 27, 2030"),
  rocket: "Explorer IS1",
  target: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};
const launch2 = {
  flightNumber: 101,
  mission: "Kepler Exploration X",
  launchDate: new Date("December 27, 2030"),
  rocket: "Explorer IS1",
  target: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};
launches.set(launch1.flightNumber, launch1);
launches.set(launch2.flightNumber, launch2);


function getAllLaunches() {
  return Array.from(launches.values());
}

function getLaunch(launchId) {
  return launches.get(launchId);
}

function addNewLaunch(newLaunch) {
  const newFlightNumber = Array.from(launches.values()).at(-1).flightNumber + 1;

  launches.set(newFlightNumber, {
    ...newLaunch,
    flightNumber: newFlightNumber,
    customers: ["Zero to Mastery", "NASA"],
    upcoming: true,
    success: true,
  });
}

function abortLaunch(launchId) {
  const launchToAbort = launches.get(launchId);

  launchToAbort.upcoming = false;
  launchToAbort.success = false;

  return launchToAbort;
}

function launchExist(launchId) {
  return launches.has(launchId);
}

module.exports = {
  getAllLaunches,
  getLaunch,
  addNewLaunch,
  abortLaunch,
  launchExist,
};
