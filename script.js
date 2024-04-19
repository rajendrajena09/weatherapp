

const search=document.querySelector(".search input");
const button=document.querySelector(".search button");


const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="af019bca50255a24904c556d1ad2c40d";



async function checkWeather(city){
    const response=await fetch(url+city+'&appid=' +apikey);
    
    if(response.status == 404){
        document.querySelector(".invalid").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
     else{
        var data = await response.json();
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".place").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
    
    const icon=document.querySelector(".icon");
    if(data.weather[0].main=="Clear"){
        icon.src="./images/clear.png"; 
    }
    else if(data.weather[0].main=="Clouds"){
        icon.src="./images/clouds.png"; 
    }
    else if(data.weather[0].main=="Drizzle"){
        icon.src="./images/drizzle.png"; 
    }
    else if(data.weather[0].main=="Mist"){
        icon.src="./images/mist.png"; 
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="./images/rain.png"; 
    }
    else if(data.weather[0].main=="Snow"){
        icon.src="./images/snow.png"; 
    }


    document.querySelector(".invalid").style.display="none";
        document.querySelector(".weather").style.display="block";
     }
    
    
}





button.addEventListener("click",()=>{
    checkWeather(search.value);
})


