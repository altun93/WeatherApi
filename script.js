const weather = document.getElementById("havadurumu");
navigator.geolocation.getCurrentPosition(konumBul);

async function konumBul(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const weatherApi = await fetch(
    ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=7756396c348d6fdccd8e5d91f542f2fd`
  );
  const weatherApiJson = await weatherApi.json();

  console.log(weatherApiJson);
  const date = new Date();
  const temp = `  Your country : ${weatherApiJson.sys.country} 
  ${date}  

  Your current Location: ${weatherApiJson.name} 
  Temperature:${weatherApiJson.main.temp}°C 
  Felt Temperature:${weatherApiJson.main.feels_like}°C
  Humidity:${weatherApiJson.main.humidity}% 
  Wind:${weatherApiJson.wind.speed} `;

  weather.textContent = temp;
}
