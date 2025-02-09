function updateWeather(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = response.data.temperature.current;

    let currentCityElement = document.querySelector("#new-city");

    let weatherDescriptionElement = document.querySelector("#weather-description");
   
    currentCityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    weatherDescriptionElement.innerHTML = response.data.condition.description;
};

function searchCity(city) {
    let apiKey = "bo5101a34b5992391t9e44f085355a8b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(updateWeather);
};

function handleSearchSubmit(event) {
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
};

let searchFormElement = document.querySelector("#city-form");
searchFormElement.addEventListener("submit", handleSearchSubmit)


searchCity("Stockholm")

