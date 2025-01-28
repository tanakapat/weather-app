//Form

function showTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current)
;    temperatureElement.innerHTML = temperature;    
};

function showCity(event) {
    event.preventDefault();
    let cityInput = document.querySelector(".search-input");
    let changeCity = document.querySelector(".current-city");
    changeCity.innerHTML = cityInput.value;

    let apiKey = "bo5101a34b5992391t9e44f085355a8b";
    let city = cityInput.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(showTemperature);
};

let newCity = document.querySelector("#city-form");
newCity.addEventListener("submit", showCity);


//Dates

function formatDay(date) {
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let weekDay = days[date.getDay()];
  return weekDay;
};

let currentHour = new Date().getHours();
console.log(currentHour);



let currentMinutes = new Date().getMinutes();
console.log(currentMinutes);

let currentTime = new Date()
console.log(currentTime);

if (currentHour < 10) {
    currentHour = `0${currentHour}`;
};

if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
};

let currentDay = formatDay(currentTime);
console.log(currentDay);

let dateDetails = document.querySelector("#current-details");
dateDetails.innerHTML = currentDay + ' ' + currentHour + ':' + currentMinutes + ', moderate rain<br /> Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>'
console.log(dateDetails);



