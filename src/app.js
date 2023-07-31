function FormatData(timestamp){
    let date=new Date(timestamp);
    let hour=date.getHours();
    let minute=date.getMinutes();
    if(minute<10){
        minute=`0${minute}`
    }
    if(hour<10){
        hour=`0${hour}`
    }
    let days=["Sunday","Monday","Teusday","Wednesday","Thursday","Friday","Saturday"]
    let day=days[date.getDay()];
    return`${day} ${hour}:${minute}`
}
function DisplayTemprature(response){
    let temp=document.querySelector("#temp");
    celsiusTemprature=response.data.temperature.current;
    temp.innerHTML=Math.round(celsiusTemprature);
    let city=document.querySelector("#city");
    city.innerHTML=response.data.city;
    let dateTime=document.querySelector("#dateTime");
    dateTime.innerHTML=FormatData(response.data.time *1000);
    let description=document.querySelector("#description");
    description.innerHTML=response.data.condition.description
    // let pressure=document.querySelector("#pressure");
    // pressure.innerHTML=response.data.temperature.pressure;
    let Humidity=document.querySelector("#Humidity");
    Humidity.innerHTML=response.data.temperature.humidity;
    let Wind=document.querySelector("#Wind");
    Wind.innerHTML=Math.round(response.data.wind.speed);
    let TempIcon=document.querySelector("#icon");
    TempIcon.setAttribute("src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
    TempIcon.setAttribute("alt",response.data.condition.description);


}
function Search(city){
    let apiKey="oa5553e83da9c0t3109e1fb49fceca48";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(DisplayTemprature)
}
function SubtHandle(event){
event.preventDefault();
let cityInputEl=document.querySelector("#city-input");
Search(cityInputEl.value)
}
function ShowFahrenheitTemprature(event){
event.preventDefault();
let temperature=document.querySelector("#temp");
celsiusLink.classList.remove("active")
fahrenheitLink.classList.add("active")
let fahrenheitTemp=(celsiusTemprature * 9)/5+32;
temperature.innerHTML=Math.round(fahrenheitTemp)
}

function ShowcelsiusTemprature(event){
event.preventDefault();
celsiusLink.classList.add("active")
fahrenheitLink.classList.remove("active")
let temperature=document.querySelector("#temp");
temperature.innerHTML=Math.round(celsiusTemprature)
}

function DisplayForecast(){
    let forecastElement=document.querySelector("#forecast");
    let forecastHTML=`<div class="row">`;
    let days=["Thu","Fri","Sat"]
    days.forEach(function(day) {
        forecastHTML=forecastHTML+    
        `<div class="col-2">
        <div class="forecast-date">
            ${day}
        </div>
        <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png" class="forecastIcn1" alt="">
        <div class="weather-forecast-temp">
            <span class="weather-forecast-max">
                18°
            </span>
            <span class="weather-forecast-min">
                 12°
            </span>
        </div>  
    </div>`;
    });
    forecastHTML=forecastHTML+`</div>`;
    forecastElement.innerHTML=forecastHTML;
}

let form=document.querySelector("#search-form");
form.addEventListener("submit",SubtHandle);
 let fahrenheitLink=document.querySelector("#fahrenheit");
 fahrenheitLink.addEventListener("click",ShowFahrenheitTemprature)

 let celsiusLink=document.querySelector("#celsius");
 celsiusLink.addEventListener("click",ShowcelsiusTemprature)

 let celsiusTemprature=null;
 DisplayForecast()