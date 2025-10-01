const input_box = document.querySelector("#input");
const searchBtn = document.getElementById("button");
const weather_img = document.querySelector("img");
const temperature = document.querySelector("#temperature");
const weather_box = document.querySelector("#weather-box");
const humidity = document.querySelector("#humidity");
const windspeed = document.querySelector(".windspeed");


 async function weatherShow(city){
    const api_key = "484dbacc865d280830cbb696613ecd33";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data =  await fetch(`${url}`).then(response => response.json());

 if(weather_data.cod === '404'){
    alert("Sorry!!!,Your Location Did't Find,Please Enter Correct Location");
    weather_img.src = "none.jpg";
    return;
}

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML =  `${weather_data.wind.speed}Km/H`
   


    switch(weather_data.weather[0].main){

        case 'Clouds':
              weather_img.src = "clouds.jpg";
              weather_box.innerHTML = "Clouds";
            break;
        case 'Clear':
             weather_img.src = "clear.jpg";
            weather_box.innerHTML = "Clear Sky";
            break;
        case 'Mist':
             weather_img.src = "mist.jpg";
             weather_box.innerHTML = "Mist Clouds";
            break;
        case 'Snow':
            weather_img.src = "snow.jpg";
            weather_box.innerHTML = "Snow";
            break;
        case 'Rain':
            weather_img.src = "rain.jpg";
            weather_box.innerHTML = "Raining";
            break;
    }
    
}

searchBtn.addEventListener("click" ,()=>{
    weatherShow(input_box.value);
})