
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
    const information = await fetch();
};

export {
    callWeatherAPI
}