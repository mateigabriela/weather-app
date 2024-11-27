const apiKey = "c62c0f917a9638022758d3a8ab92dfc5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function  checkWeather(city) {
    const response = await fetch(apiUrl + city  + `&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else { var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://img.icons8.com/?size=100&id=iBB0DhmFMkqA&format=png&color=000000";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://img.icons8.com/?size=100&id=KtMp9I2a21d1&format=png&color=000000";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://img.icons8.com/?size=100&id=1cgROOCT2iLd&format=png&color=000000";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://img.icons8.com/?size=100&id=8GOoTDlFKRbw&format=png&color=000000";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "https://img.icons8.com/?size=100&id=PvmUO3NfHt43&format=png&color=000000";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://img.icons8.com/?size=100&id=vMN94cb57jze&format=png&color=000000";
        } 
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})


function changeBackgroung() {
const card = document.querySelector(".card");
const error = document.querySelector(".error");

    const ora = new Date().getHours(); 
    const body = document.body;
    if (ora >= 6 && ora < 20) {
        body.style.background = "linear-gradient(135deg, #FEEE91, #F1F0E8)";
        card.style.background = "linear-gradient(135deg,#F1F0E8, #FEEE91)";
        error.style.color = "black";
    } else if (ora >= 20 && ora < 6) {
        body.style.background = "linear-gradient(135deg, #A2D2DF, #F1F0E8)";
        card.style.background = "linear-gradient(135deg,#F1F0E8, #A2D2DF)";
        error.style.color = "black";
    }
}

changeBackgroung();
setInterval(changeBackgroung, 60000);
