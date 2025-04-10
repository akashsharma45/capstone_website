async function getWeather() {

    const city = document.getElementById('city-input').value||'kanpur';
    const apiKey = '68902669ec8942fea23142156250204'; // Your API key
    console.log(city);

    try{
        const rawData= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=yes&alerts=yes`);
        const rawPrediction= await fetch(`https://akashsharma.pythonanywhere.com/predict?city=${city}`);
        const weatherData= await rawData.json();
        const prediction= await rawPrediction.json();
        console.log(weatherData);
        console.log(prediction);

        document.getElementById('city-name').textContent = weatherData?.location?.name;
        document.getElementById('location').textContent = ` ${weatherData?.location?.region}, ${weatherData?.location?.country}`;

        document.getElementById('temperature').textContent = `${weatherData?.current?.temp_c} °C`;
        document.getElementById('condition').textContent=` ${weatherData?.current?.condition?.text}`;
        document.getElementById('wind_speed').textContent = `${weatherData?.current?.wind_kph} km/h`;
        document.getElementById('wind_dir').textContent = `${weatherData?.current?.wind_dir}`;
        document.getElementById('pressure').textContent = `${weatherData?.current?.pressure_mb} mb`;
        document.getElementById('humidity').textContent = `${weatherData?.current?.humidity} %`;
        document.getElementById('visibility').textContent = `${weatherData?.current?.vis_km} km`;

        // info div starts-->

        
        document.getElementById('aqi').textContent = `${weatherData?.current?.air_quality?.['us-epa-index']}`;
        document.getElementById('co').textContent=` ${weatherData?.current?.air_quality?.co}`;
        document.getElementById('no2').textContent = `${weatherData?.current?.air_quality?.no2}`;
        document.getElementById('o3').textContent = `${weatherData?.current?.air_quality?.o3}`;
        document.getElementById('so2').textContent = `${weatherData?.current?.air_quality?.so2}`;
        document.getElementById('pm10').textContent = `${weatherData?.current?.air_quality?.pm10}`;
        

        document.getElementById('max_temp').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.maxtemp_c} °C`;
        document.getElementById('min_temp').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.mintemp_c} °C`;
        document.getElementById('avg_temp').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.avgtemp_c} °C`;
        document.getElementById('max_wind').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.maxwind_kph} Kph`;
        document.getElementById('precipitation').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.totalprecip_mm} Mm`;
        document.getElementById('rain_probability').textContent = `${weatherData?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain} %`;
        
        document.getElementById('sunrise').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.sunrise}`;
        document.getElementById('moonrise').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.moonrise}`;
        document.getElementById('moon_phase').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.moon_phase}`;
        document.getElementById('moonrise').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.moonrise}`;
        document.getElementById('sunset').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.sunset}`;
        document.getElementById('moonset').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.moonset}`;
        document.getElementById('moon_illumination').textContent = `${weatherData?.forecast?.forecastday?.[0]?.astro?.moon_illumination}`;
        // document.getElementById('description').textContent = `Description: ${weatherData?.current?.condition?.text}`;
        // document.getElementById('humidity').textContent = `Humidity: ${weatherData?.current?.humidity}%`;


        //accessing predication data from ai/ml api

        document.getElementById('rain-prediction').textContent = `${prediction?.rain_prediction}`;
        document.getElementById('pTime1').textContent = `${prediction?.future_predictions?.times?.[0]}`;
        document.getElementById('pTime2').textContent = `${prediction?.future_predictions?.times?.[1]}`;
        document.getElementById('pTime3').textContent = `${prediction?.future_predictions?.times?.[2]}`;
        document.getElementById('pTime4').textContent = `${prediction?.future_predictions?.times?.[3]}`;
        document.getElementById('pTime5').textContent = `${prediction?.future_predictions?.times?.[4]}`;
        document.getElementById('pTemp1').textContent = `${prediction?.future_predictions?.temperature?.[0]} °C`;
        document.getElementById('pTemp2').textContent = `${prediction?.future_predictions?.temperature?.[1]} °C`;
        document.getElementById('pTemp3').textContent = `${prediction?.future_predictions?.temperature?.[2]} °C`;
        document.getElementById('pTemp4').textContent = `${prediction?.future_predictions?.temperature?.[3]} °C`;
        document.getElementById('pTemp5').textContent = `${prediction?.future_predictions?.temperature?.[4]} °C`;
        document.getElementById('pHum1').textContent = `Humidity: ${prediction?.future_predictions?.humidity?.[0]} %`;
        document.getElementById('pHum2').textContent = `Humidity: ${prediction?.future_predictions?.humidity?.[1]} %`;
        document.getElementById('pHum3').textContent = `Humidity: ${prediction?.future_predictions?.humidity?.[2]} %`;
        document.getElementById('pHum4').textContent = `Humidity: ${prediction?.future_predictions?.humidity?.[3]} %`;
        document.getElementById('pHum5').textContent = `Humidity: ${prediction?.future_predictions?.humidity?.[4]} %`;

    }catch(error){
        console.log("Api is not able to fetch data 🥹🥹");
        console.log(error);
    }
    
}

getWeather();

let x=true;

function dayNight(){
    if(x){
        document.body.style.backgroundImage = "url('587601.jpg')";
        document.getElementById('night-day').textContent = `Dark`;
        x=!x;
    }
    else{
        document.body.style.backgroundImage = "url('black.jpg')";
        document.getElementById('night-day').textContent = `Light`;
        x=!x;
    }
}

x=false;
function iphone13(){
    if(x){
        document.body.style.backgroundImage = "url('IMG_7262.JPG')";
        document.getElementById('btn').textContent = `🌙`;
        x=!x;
    }
    else{
        document.body.style.backgroundImage = "url('black.jpg')";
        document.getElementById('btn').textContent = `🌞`;
        x=!x;
    }
}

