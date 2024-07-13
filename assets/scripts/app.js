
const searchBtn = document.querySelector(".search button");

const apiKey = " ";

const weatherIcon = document.querySelector('.weather-icon');


function clear(){
    document.querySelector(".search input").value = '';
}


async function checkWeather() {

    const cityName = document.querySelector(".search input").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
    

    if(cityName === ''){
        alert("Digit a valid city");
        return;
    }

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados da API.');
        }
        const data = await response.json();
        console.log(data);

        changeWeather(data);

    } catch (error) {
        console.error('Erro durante a requisição:', error);
    }
    

    clear();
}

function changeWeather(data){

    weatherCondition(data.weather[0].main);
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.cityName').textContent = data.name;
        document.querySelector('.temp').textContent = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').textContent = data.main.humidity + '%';
        document.querySelector('.wind').textContent = data.wind.speed + 'km/h';
}


function weatherCondition(data){

    if(data == 'Clouds'){
        weatherIcon.src = 'images/clouds.png';
    }else if(data === 'Clear'){
        weatherIcon.src = 'images/clear.png';
    }else if(data === 'Rain')
    {
        weatherIcon.src = 'images/rain.png';
    }else if(data === 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    }else if(data === 'Mist'){
        weatherIcon.src = 'images/mist.png';
    }
}


searchBtn.addEventListener('click', checkWeather);




