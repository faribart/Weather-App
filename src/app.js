function DisplayTemprature(response){
    console.log(response.data.temperature.current)
}
let apiKey="oa5553e83da9c0t3109e1fb49fceca48";
let query="New York"
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`
console.log(apiUrl)
axios.get(apiUrl).then(DisplayTemprature)