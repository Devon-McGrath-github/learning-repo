const city = "london";

const exposedAPI = "8f684f979fad4bd683f42614232806";

const API = `https://api.weatherapi.com/v1/current.json?key=${exposedAPI}&q=${city}`;

// URL (required), options (optional)
fetch(API)
  .then(function (response) {
    console.log(response);
    // Successful response :)
  })
  .catch(function (err) {
    // Error :(
    console.log(err);
  });
