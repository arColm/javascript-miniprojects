(()=>{"use strict";const e="1d32b5ac8cafcff34530c2f39f1a7d46",t=document.querySelector("#content"),n=document.querySelector("#header");!function(){n.replaceChildren();const c=document.createElement("h1");c.innerHTML="Weather App",n.appendChild(c);const a=document.createElement("label");a.setAttribute("for","location"),a.innerHTML="Enter a location:",n.appendChild(a);const o=document.createElement("input");o.setAttribute("id","location"),o.setAttribute("type","text"),n.appendChild(o);const d=document.createElement("table"),r=document.createElement("tr"),i=document.createElement("th");i.innerHTML="Location",r.appendChild(i);const p=document.createElement("th");p.innerHTML="Description",r.appendChild(p);const l=document.createElement("th");l.innerHTML="Temperature",r.appendChild(l);const m=document.createElement("th");m.innerHTML="Wind Speed",r.appendChild(m),d.appendChild(r),t.appendChild(d),o.addEventListener("keypress",(t=>{"Enter"===t.key&&(async function(t){const n=await async function(t){const n=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=5&appid=${e}`,{mode:"cors"}).then((e=>e.json())).then((e=>{let t=e[0],n=[t.lat,t.lon];return console.log(n),n}));return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n[0]}&lon=${n[1]}&appid=${e}`,{mode:"cors"}).then((e=>e.json())).then((e=>({description:e.weather[0].description,temp:Math.round(100*(e.main.feels_like-273))/100,wind:e.wind.speed})))}(t),c=document.querySelector("table"),a=document.createElement("tr"),o=document.createElement("th");o.innerHTML=t,a.appendChild(o);const d=document.createElement("th");d.innerHTML=n.description,a.appendChild(d);const r=document.createElement("th");r.innerHTML=`${n.temp} C`,a.appendChild(r);const i=document.createElement("th");i.innerHTML=`${n.wind}`,a.appendChild(i),c.appendChild(a),console.log(n)}(o.value),o.value="")}))}()})();