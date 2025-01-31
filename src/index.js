function searchCity(city) {
    let apiKey = "bo5101a34b5992391t9e44f085355a8b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    console.log(apiUrl)
};

function handleSearchSubmit(event) {
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
    let currentCityElement = document.querySelector("#new-city");
    currentCityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
};

let searchFormElement = document.querySelector("#city-form");
searchFormElement.addEventListener("submit", handleSearchSubmit)



