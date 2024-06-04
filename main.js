const apikey = "b3838b4c153d2d198792b067cb8c215d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkwether(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    if (response.status == 404) {
        let prommsg = prompt("unvalid city name yaaa جحشششش");
        document.write(prommsg);
    }
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + `KM/h`;

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "img/clouds.png";
        document.querySelector(".card").style.backgroundImage = "url('bc-clouds.gif')";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "img/clear.png";
        document.querySelector(".card").style.backgroundImage = "url('bc-clear.gif')";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "img/rain.png";
        document.querySelector(".card").style.backgroundImage = "url('bc-rain.gif')";
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "img/drizzel.png";
        document.querySelector(".card").style.backgroundImage = "url('bc-drizzle.gif')";
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "img/mist.png";
        document.querySelector(".card").style.backgroundImage = "url('bc-mist.gif')";
    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src = "img/snow.png";
        document.querySelector(".card").style.backgroundImage = "url('bc-snow.gif')";
    }

    document.querySelector(".weather").style.display = "block";

}


searchbtn.addEventListener("click", () => {
    checkwether(searchbox.value);
})



