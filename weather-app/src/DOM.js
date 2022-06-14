import * as weatherAPI from "./weatherAPI.js";

/**
 * 
 * @param {*WeatherInformation} information 
 */
async function displayWeatherInformation(location) {
    const information = await weatherAPI.callWeatherAPI(location);    

    console.log(information);
}



export {
    displayWeatherInformation
}