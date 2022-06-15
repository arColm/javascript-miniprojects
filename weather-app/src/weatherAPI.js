
const APIkey = "1d32b5ac8cafcff34530c2f39f1a7d46";

/**
 * This class contains all weather information for a location.
 */
class WeatherInformation {
    constructor(location,temperature) {
        this.location = location;
        this.temperature = temperature;
    }
}

/**
 * This function calls the OpenWeatherMap API and returns an object with the
 * weather information for a specified location.
 * @param {*String} location 
 * @returns A WeatherInformation object on success
 */
async function callWeatherAPI(location) {
    const latlon = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${APIkey}`,{mode: 'cors'})
        .then( response => {
            return response.json();
        })
        .then( response => {
            let output = response[0];
            let coordinates = [output["lat"],output["lon"]];
            console.log(coordinates);
            return coordinates;
        });
    
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlon[0]}&lon=${latlon[1]}&appid=${APIkey}`,{mode:'cors'})
        .then( response => {
            return response.json();
        })
        .then( response => {
            let info = {
                "description":response["weather"][0]["description"],
                "temp":Math.round((response["main"]["feels_like"]-273)*100)/100,
                "wind":response["wind"]["speed"]
            };
            return info;
        })

    return weather;
};

export {
    callWeatherAPI
}