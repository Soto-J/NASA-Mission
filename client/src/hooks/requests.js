const API_URL = "http://localhost:8000";

// Get all Planets
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);

  if (!response.ok) {
    throw new Error(`An error has occured: ${response.status}`);
  }

  return await response.json();
}

// Get all Launches
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);

  if (!response.ok) throw new Error(`An error has occured: ${response.status}`);

  const launches = await response.json();
  console.log(launches);

  return launches.sort((a, b) => a.flightNumber - b.flightNumber);
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    return { ok: false };
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
