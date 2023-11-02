let temp;
let feelsLike;
let humidity;
let lastUpdated;

// Form Variables
const weatherForm = document.getElementById('weatherForm');
const cityInputField = document.getElementById('cityInput');
const getButton = document.getElementById('getButton');

// Display Variables
const locationDisplay = document.getElementById('location');
const temperatureDisplay = document.getElementById('temperature');
const feelsLikeDisplay = document.getElementById('feelsLike');
const humidityDisplay = document.getElementById('humidity');
const lastUpdatedDisplay = document.getElementById('lastUpdated');

function assembleURL() {
    const apiKey = 'dd511b318f1342e1b21182703232010';
    const baseweatherUrl = 'https://api.weatherapi.com/v1/current.json?key=';
    // const query = 'fultondale';
    const query = cityInputField.value;
    const wholeWebsite = `${baseweatherUrl}${apiKey}&q=${query}&q=bulk`;
    return wholeWebsite
}
// eslint-disable-next-line no-unused-vars
async function getWeather() {
    /* This function is called by the 'get weather' button in html file. */
    const wholeWebsite = assembleURL();
    console.log(wholeWebsite)
    fetch(wholeWebsite)
    .then(res => res.json())
    .then(data => {
        const websiteResponse = data;
        const currentWeather = websiteResponse.current;
        const location = `${websiteResponse.location.name}, ${websiteResponse.location.region}, ${websiteResponse.location.country}`;
        temp = currentWeather.temp_f;
        feelsLike = currentWeather.feelslike_f;
        humidity = currentWeather.humidity;
        lastUpdated = currentWeather.last_updated;
        temperatureDisplay.innerHTML = `Temperature: <b>${temp}F</b>`;
        feelsLikeDisplay.innerHTML = `Feels Like: <b>${feelsLike}F</b>`;
        humidityDisplay.innerHTML = `Humidity: <b>${humidity}%</b>`;
        lastUpdatedDisplay.innerHTML = `Last Updated: <b>${lastUpdated}</b>`;
        locationDisplay.innerHTML = `Location: <b>${location}</b>`;
        console.log({ websiteResponse, currentWeather })
    })
    .catch(error => alert(error))
    .finally(getButton.value = 'Get Weather Data')
}

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  getWeather();
});