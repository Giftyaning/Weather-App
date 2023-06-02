function formatDate(timestamp) {

let date = new Date(timestamp);

let hours = date.getHours();

if (hours < 10) {

hours = `0${hours}`;

}

let minutes = date.getMinutes();

if (minutes < 10) {

minutes = `0${minutes}`;

}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[date.getDay()];

return `${day} ${hours}:${minutes}`;

}

function displayTemperature(response) {


let temperatureElement = document.querySelector("#temperature");

let cityElement = document.querySelector("#city-name");

let descriptionElement = document.querySelector("#description");

let humidityElement = document.querySelector("#humid");

let windElement = document.querySelector("#speed");

let dateElement = document.querySelector("#date");

temperatureElement.innerHTML = Math.round(response.data.main.temp) + "ºc";

cityElement.innerHTML = response.data.name;

descriptionElement.innerHTML = response.data.weather[0].description;

humidityElement.innerHTML = response.data.main.humidity;

windElement.innerHTML = Math.round(response.data.wind.speed);

dateElement.innerHTML = formatDate(response.data.dt * 1000);

let weatherIconElement = document.querySelector(".weather-icon");

const weatherIcons = {

"Clear": "☀️",

"Clouds": "☁️",

"Rain": "🌧️",

"Drizzle": "🌦️",

"Thunderstorm": "⛈️",

"Snow": "❄️",

"Mist": "🌫️",

};

let weather = response.data.weather[0].main;

weatherIconElement.innerHTML = weatherIcons[weather] || "❓";

}

function getWeather(cityName) {

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3980a7c8f2a782241a093131b099f993&units=metric`;

axios.get(apiUrl).then(displayTemperature);

}

function search(event) {

event.preventDefault();

let searchInput = document.querySelector("#search-text-input");

let cityName = searchInput.value.trim();

if (cityName.length > 0) {

getWeather(cityName);

}

searchInput.value = "";

}

document.addEventListener("DOMContentLoaded", function() {

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);

});