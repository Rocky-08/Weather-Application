
let APIKEY = 'GhjzvpwsSzI3I43LRMeb68IakSLm3v74dqxHqik5';
let APIURL = `api.openweathermap.org/data/2.5/weather?q=Delhi&appid=43906d27394468badebd5d1199295256`
let newWeather = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=43906d27394468badebd5d1199295256'
let api = '43906d27394468badebd5d1199295256';
/* let city = document.querySelector('.city')
 */let weatherNews= document.querySelector('.weather')
let desc = document.querySelector('.desc');
let information = document.querySelector('.info');
let icon = document.querySelector('.icon');
let search = document.querySelector('.search');
let box = document.querySelector('.box');

let icons = function(data)
{
   if(data.weather[0].description=='clear sky')

    {
       box.classList.add('clear');
       box.classList.remove('snow');
       box.classList.remove('scattered');
       box.classList.remove('broken')
       box.classList.remove('container');
    }
    
    else if(data.weather[0].description=='scattered clouds')
    {
      box.classList.add('scattered');
      box.classList.remove('broken')
      box.classList.remove('container');
      box.classList.remove('clear');
      box.classList.remove('snow');
   }

   else if(data.weather[0].description=='broken clouds')
   {
       box.classList.add('broken')
       box.classList.remove('container');
       box.classList.remove('clear');
       box.classList.remove('snow');
       box.classList.remove('scattered');
   }

   else if(data.weather[0].description == 'snow')
   {
       box.classList.add('snow');
       box.classList.remove('scattered');
      box.classList.remove('broken')
      box.classList.remove('container');
      box.classList.remove('clear');
   }

   else{
    box.classList.add('container');
   }
}

let info = function(data)
{
    information.innerHTML = '';
    let html = `
    

    <div class="city">
       Weather in ${data.name}
    </div>
      
     <div class="weather">
        
       ${(data.main.temp-273).toFixed(2)}°C

     </div>

     <div class="desc">
     
            <h2>  ${data.weather[0].description}</h2>
        <h3 class="humidity">Humidity : ${data.main.humidity}%</h3>    
        <h3 class="wind">Wind : ${data.wind.speed} km/h</h3>    

     </div>
    
   `;
      
    icons(data);

   console.log(html);

   information.insertAdjacentHTML('beforeend',html);


}

let weather = async function(city)
{
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43906d27394468badebd5d1199295256`)
    console.log(res);

    let resData = await res.json();
    console.log(resData);

    info(resData);

}


icon.addEventListener('click',function()
{
    
    /* e.preventDefault(); */
   let city = search.value;
   search.value = '';

   console.log(city);

   weather(city);
});

    

    



    

