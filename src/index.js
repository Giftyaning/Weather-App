//function to give the current time and date.

let now = new Date();

    let time = document.querySelector("#set-time");

    let current = document.querySelector("h3");

    let date = now.getDate();

    let year = now.getFullYear();

    let hour = now.getHours();

    if (hour < 10) {

    hour = `0${hour}`;

    }

    let minutes = now.getMinutes();

    if (minutes < 10) {

    minutes = `0${minutes}`;

    }

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[now.getDay()];

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let month = months[now.getMonth()];

    current.innerHTML = `${day}`;

//Function to show current temperature.

const weatherIcons = {
  "Clear": "☀️",
  "Clouds": "☁️",
  "Rain": "🌧️",
  "Drizzle": "🌦️",
  "Thunderstorm": "⛈️",
  "Snow": "❄️",
  "Mist": "🌫️",
};

function showTemperature(response) {

    let temperature = Math.round(response.data.main.temp);

    let temperatureElement = document.querySelector("#temperature");

    temperatureElement.innerHTML = `${temperature}ºC`;



    let weatherCondition = response.data.weather[0].main;
    let weatherIconElement = document.querySelector(".weather-icon");
    weatherIconElement.innerHTML = weatherIcons[weatherCondition] || "❓";
}

//Function to get the weather data for a specific city.

function getWeather(cityName) {

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3980a7c8f2a782241a093131b099f993&units=metric`;

    axios.get(apiUrl).then(showTemperature);

}

//Function for search event.

function search(event) {

    event.preventDefault();

    let searchInput = document.querySelector("#search-text-input");

    let h1 = document.querySelector("#city-name");

    h1.innerHTML = `${searchInput.value}`;

    let cityName = searchInput.value;

    getWeather(cityName);

    getCurrentTime(cityName);

    searchInput.value = "";

}

let form = document.querySelector("#search-form")

    form.addEventListener("submit", search);

    // Function to handle the page load event

    function onPageLoad() {

    updateDateTime();

    setInterval(updateDateTime, 1000); // Update date and time every second

}

window.addEventListener("load", onPageLoad);

    function getCurrentTime(cityName) {

    let apiUrl = `http://worldtimeapi.org/api/timezone/Europe/${cityName}`;

    axios.get(apiUrl).then(showCurrentTime).catch(handleError);

}

//To get current time

function showCurrentTime(response) {

    let currentTimeElement = document.querySelector("#set-clock");

    let currentDateTime = new Date(response.data.datetime);

    let hour = currentDateTime.getHours().toString().padStart(2, "0");

    let minutes = currentDateTime.getMinutes().toString().padStart(2, "0");

    currentTimeElement.textContent = `${hour}:${minutes}`;

}

//To handle errors if necessary

function handleError(error) {

    console.log(error);

}