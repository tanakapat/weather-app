function handleSearchSubmit(event) {
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
    let currentCityElement = document.querySelector("#new-city");
    currentCityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#city-form");
searchFormElement.addEventListener("submit", handleSearchSubmit)



