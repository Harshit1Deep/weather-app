const apikey="5bae7deb2a54a9cafa5f1400f5050045";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");
async function check_weather(city) {
    const response = await fetch(apiurl +city + `&appid=${apikey}`);
	if(response.status == 404){
			document.querySelector(".error").style.display= "block";
			document.querySelector(".weather").style.display= "none";
    }
    else{

        let data = await response.json();// console.log(data); 
        document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
		document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

		if(data.weather[0].main =="Clouds")
		{
			weather_icon.src ="images/clouds.png";
		}
		else if(data.weather[0].main =="Rain")
		{
			weather_icon.src ="images/rain.png";
		}
		else if(data.weather[0].main =="Clear")
		{
			weather_icon.src ="images/clear.png";
		}
		else if(data.weather[0].main =="Drizzle")
		{
			weather_icon.src ="images/drizzle.png";
		}
		else if(data.weather[0].main =="Humidity")
		{
			weather_icon.src ="images/humidity.png";
		}
		else if(data.weather[0].main =="Mist")
		{
			weather_icon.src ="images/mist.png";
		}
		else if(data.weather[0].main =="Snow")
		{
			weather_icon.src ="images/snow.png";
		}
		else if(data.weather[0].main =="Wind")
		{
			weather_icon.src ="images/wind.png";
		}	
		
		document.querySelector(".weather").style.display = "block";
		document.querySelector(".error").style.display= "none";
    }
}
searchbtn.addEventListener("click",()=>{
    check_weather(searchbox.value);
})
