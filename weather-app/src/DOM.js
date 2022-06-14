import * as weatherAPI from "./weatherAPI.js";

const body = document.querySelector("#content");
const header = document.querySelector("#header");

function initializePage() {
    header.replaceChildren();
    const h1 = document.createElement("h1");
    h1.innerHTML = "Weather App";
    header.appendChild(h1);

    const label = document.createElement("label");
    label.setAttribute("for","location");
    label.innerHTML = "Enter a location:";
    header.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("id","location");
    input.setAttribute("type","text");
    header.appendChild(input);

    const table = document.createElement("table");

    const headerRow = document.createElement("tr");
    const locationTH = document.createElement("th");
    locationTH.innerHTML="Location";
    headerRow.appendChild(locationTH);
    const descriptionTH = document.createElement("th");
    descriptionTH.innerHTML="Description";
    headerRow.appendChild(descriptionTH);
    const temperatureTH = document.createElement("th");
    temperatureTH.innerHTML="Temperature";
    headerRow.appendChild(temperatureTH);
    const windTH = document.createElement("th");
    windTH.innerHTML="Wind Speed";
    headerRow.appendChild(windTH);
    table.appendChild(headerRow);

    body.appendChild(table);


    input.addEventListener("keypress", event => {
        if(event.key ==="Enter") {
            displayWeatherInformation(input.value);
            input.value = "";
        }
    })
}

/**
 * 
 * @param {*WeatherInformation} information 
 */
async function displayWeatherInformation(location) {
    const information = await weatherAPI.callWeatherAPI(location);    

    const table = document.querySelector("table");
    
    const row = document.createElement("tr");
    const locationTD = document.createElement("th");
    locationTD.innerHTML=location;
    row.appendChild(locationTD);

    const description = document.createElement("th");
    description.innerHTML=information["description"];
    row.appendChild(description);

    const temperature = document.createElement("th");
    temperature.innerHTML=`${information["temp"]} C`;
    row.appendChild(temperature);

    const wind = document.createElement("th");
    wind.innerHTML=`${information["wind"]}`;
    row.appendChild(wind);

    table.appendChild(row);

    console.log(information);
}



export {
    displayWeatherInformation,
    initializePage
}