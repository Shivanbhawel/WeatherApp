        
function getWeather() {
    const inputBox = document.getElementById('cityInput');
    const cityName = inputBox.value;

    const apiKey = '199d47abe256277c0c9ff99a838a2c02';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},in&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weather_img = document.querySelector('.weather-img');
    const temperature = document.querySelector('.temperature');
    const description = document.querySelector('.description');
    const humidity = document.querySelector('#humidity');
    const wind_speed = document.querySelector('#wind-speed');
    const message = document.querySelector(".message");

    if (data.cod === '404') {

       message.innerHTML = `${data.message}`;
       return;
    }

    temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind_speed.innerHTML = `${data.wind.speed}km/h`;

    switch (data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "https://cdn0.iconfinder.com/data/icons/hotel-and-travel-2-1/52/56-512.png";
            break;
        case 'Clear':
            weather_img.src = "https://www.pngarts.com/files/4/Sun-PNG-Image.png";
            break;
        case 'Rain':
            weather_img.src = "http://cliparts.co/cliparts/kcK/n48/kcKn48EXi.png";
            break;
        case 'Mist':
            weather_img.src = "https://cdn0.iconfinder.com/data/icons/weather-402/15/Vector-8-512.png";
            break;
        case 'Smoke':
            weather_img.src = "https://webstockreview.net/images/clipart-snow-snow-cloud-12.png";
            break;
    }
}