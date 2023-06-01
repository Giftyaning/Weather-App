function displayTemperature(response) {

console.log(response.data);

let temperatureElement = document.querySelector("#temperature");

let cityElement = document.querySelector("#city-name");

let humidityElement = document.querySelector("#humid");

let windElement = document.querySelector("#speed");

temperatureElement.innerHTML = Math.round(response.data.main.temp);

cityElement.innerHTML = response.data.name;

humidityElement.innerHTML = response.data.main.humidity;

windElement.innerHTML = Math.round(response.data.wind.speed);

}

let apiKey = "f42a88be335e928af3463b3b12ed0e27"

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=f42a88be335e928af3463b3b12ed0e27&units=metric`"

axios.get(apiUrl).then(displayTemperature);