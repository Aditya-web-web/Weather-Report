let url = "https://api.openweathermap.org/data/2.5/weather?";
let key = "183c211aab59b8c065828cc45b4ae481";


let button = document.querySelector("button");
let input = document.querySelector("input");

async function details(cityName){
    let rawData = await fetch(url+"q="+cityName+"&appid="+key+"&units=metric")
    let data = await rawData.json();
    let temp = document.getElementById("temp");
    temp.innerText = Math.round(data.main.temp)+"°C";
    let city = document.getElementById("city");
    city.innerText = cityName;
    let humidity = document.getElementById("humidity");
    humidity.innerText = data.main.humidity;
    let wind = document.getElementById("wind");
    wind.innerText = data.wind.speed;
    image(data);
}

function image(data){
    if(data.weather[0].main == "Clear"){
        let img = document.getElementById("img");
        img.src = "sun.png";
    }
    else if(data.weather[0].main == "Clouds"){
        let img = document.getElementById("img");
        img.src = "clouds.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        let img = document.getElementById("img");
        img.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        let img = document.getElementById("img");
        img.src = "mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        let img = document.getElementById("img");
        img.src = "rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        let img = document.getElementById("img");
        img.src = "snow.png";
    }
    else{
        console.log("Not found");
    }
};

button.addEventListener("click",async ()=>{
    let cityName = input.value;
    input.value = "";
    details(cityName);
});
input.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && e.keyCode === 13) {
        let cityName = input.value;
        input.value = "";
        details(cityName);
    }
});