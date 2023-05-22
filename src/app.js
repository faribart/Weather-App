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
    console.log(response.data)
    let temp=document.querySelector("#temp");
    temp.innerHTML=Math.round(response.data.temperature.current);
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

}
let apiKey="oa5553e83da9c0t3109e1fb49fceca48";
let query="New York"
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`
console.log(apiUrl)
axios.get(apiUrl).then(DisplayTemprature)