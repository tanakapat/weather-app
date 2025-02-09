function updateWeather(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = response.data.temperature.current;

    let currentCityElement = document.querySelector("#new-city");

    let weatherDescriptionElement = document.querySelector("#weather-description");

    let humidityElement = document.querySelector("#humidity");

    let windSpeedElement = document.querySelector("#wind-speed");

    let timeElement = document.querySelector("#time");

    let date = new Date(response.data.time * 1000);
   
    currentCityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    weatherDescriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
    timeElement.innerHTML = formatDate(date);
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

function formatDate(date) {    
    let minutes = date.getMinutes();

    let hours = date.getHours();
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    return `${day} ${hours}:${minutes}`
}

let searchFormElement = document.querySelector("#city-form");
searchFormElement.addEventListener("submit", handleSearchSubmit)


searchCity("Stockholm")

