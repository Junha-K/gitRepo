const WEATHER_API_KEY = 'cdeb9f3add9835b85319ba3a0009e6ed';

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cdeb9f3add9835b85319ba3a0009e6ed&units=metric`
    
    fetch(url).then(response => response.json()).then( data =>{
        const weather = document.querySelector('#weathercontainer span:first-child');
        const city = document.querySelector('#weathercontainer span:last-child');
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        city.innerText = 'at ' + data.name;
    })
}
function onGeoError() {
    alert('Can\'t find your Location. No weather for you.')
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);