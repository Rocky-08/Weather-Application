!function(){document.querySelector(".weather"),document.querySelector(".desc");let e=document.querySelector(".info"),s=document.querySelector(".icon"),t=document.querySelector(".search"),n=document.querySelector(".box"),c=function(s){e.innerHTML="";let t=`\n    \n\n    <div class="city">\n       Weather in ${s.name}\n    </div>\n      \n     <div class="weather">\n        \n       ${(s.main.temp-273).toFixed(2)}°C\n\n     </div>\n\n     <div class="desc">\n     \n            <h2>  ${s.weather[0].description}</h2>\n        <h3 class="humidity">Humidity : ${s.main.humidity}%</h3>    \n        <h3 class="wind">Wind : ${s.wind.speed} km/h</h3>    \n\n     </div>\n    \n   `;!function(e){"clear sky"==e.weather[0].description?(n.classList.add("clear"),n.classList.remove("snow"),n.classList.remove("scattered"),n.classList.remove("broken"),n.classList.remove("container")):"scattered clouds"==e.weather[0].description?(n.classList.add("scattered"),n.classList.remove("broken"),n.classList.remove("container"),n.classList.remove("clear"),n.classList.remove("snow")):"broken clouds"==e.weather[0].description?(n.classList.add("broken"),n.classList.remove("container"),n.classList.remove("clear"),n.classList.remove("snow"),n.classList.remove("scattered")):"snow"==e.weather[0].description?(n.classList.add("snow"),n.classList.remove("scattered"),n.classList.remove("broken"),n.classList.remove("container"),n.classList.remove("clear")):n.classList.add("container")}(s),console.log(t),e.insertAdjacentHTML("beforeend",t)};s.addEventListener("click",(function(){let e=t.value;t.value="",console.log(e),async function(e){let s=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=43906d27394468badebd5d1199295256`);console.log(s);let t=await s.json();console.log(t),c(t)}(e)}))}();
//# sourceMappingURL=index.85919330.js.map