const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherCity = document.querySelector('.city'); 
const wind = document.querySelector('.wind'); 
const humidity = document.querySelector('.humidity'); 
const weatherError = document.querySelector('.weather-error'); 

async function getWeather() {  
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=en&appid=ecf3fb1a0297242bf6ebd4ab4a5e7e35&units=metric`;
	const res = await fetch(url);
	const data = await res.json(); 
	if(data.cod === '400') {
		weatherError.textContent = `Error! ${data.message}`
		weatherIcon.className = 'weather-icon owf';
		temperature.textContent = '';
		humidity.textContent = '';
		wind.textContent = '';
		weatherDescription.textContent = ''
		weatherCity.value = ''
	}
	else if (data.cod === '404') {
		weatherError.textContent = `Error! ${data.message}`
		weatherIcon.className = 'weather-icon owf';
		temperature.textContent = '';
		humidity.textContent = '';
		wind.textContent = '';
		weatherDescription.textContent = ''
		weatherCity.value = ''
	}

	else {
	weatherError.textContent = ''
	weatherIcon.className = 'weather-icon owf';
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	temperature.textContent = `${Math.round(data.main.temp)}°C`;
	humidity.textContent = `Humidity ${data.main.humidity}%`;
	wind.textContent = `Wind speed ${Math.round(data.wind.speed)}m/s`;
	weatherDescription.textContent = data.weather[0].description;
	}
 }


weatherCity.addEventListener('change', getWeather)


 export{weatherCity, getWeather}