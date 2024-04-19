const betData = {
  id: 1,
  event: "April digging night",
  contestant: "Mini Mole",
  date: "2024-15-05T20:00",
  coefficients: {
    win: 1,
    loose: 2,
  },
};

// ---------------------- //

// GET by default if method type is not specified
// This function is declared as async, indicating that it uses asynchronous operations.
async function getBets() {
  try {
    // Awaiting the fetch call ensures that the function execution pauses here until the fetch completes.
    const response = await fetch("http://localhost:3000/bet");

    // Awaiting the json parsing of the response as well, pausing until this operation completes.
    const jsonResponse = await response.json();

    // The jsonResponse is logged to the console after it is fully retrieved and parsed.
    console.log(jsonResponse);
  } catch (e) {
    // Any errors in fetching or parsing are caught here and could be handled or logged.
    console.error("Error fetching bets:", e);
  }
}

// POST
async function postBet(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json(); // Assuming the server responds with JSON
    console.log("Response from POST:", jsonResponse);
  } catch (error) {
    console.error("Error in POST:", error);
  }
}

// PUT
async function updateBet(betId, updatedBet) {
  try {
    const response = await fetch(`http://localhost:3000/bet/${betId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBet),
    });

    const jsonResponse = await response.json();

    console.log("Update successful:", jsonResponse);
  } catch (e) {
    console.error("Error updating bet:", e);
  }
}

// DELETE
async function deleteBet(betId) {
  try {
    const response = await fetch(`http://localhost:3000/bet/${betId}`, {
      method: "DELETE",
    });

    console.log("Delete successful, status:", response.status);
  } catch (e) {
    console.error("Error deleting bet:", e);
  }
}
