import {showsGraphic, createChart} from "./createGraph.js";
import {createDateText} from "./dateConversion.js";

//Make 4 arrays (1 for date, 1 for temperature, 1 for min temperature, 1 for max temperature)
let date = [];
let temperature = [];
let minTemperature = [];
let maxTemperature = [];
let timeStamps = [];

/**
 * Grab the necessary data from the weather data object and put in arrays.
 * @param weatherData (object) Weather data from location.
 */
//loop over array and display weather for each timestamp
export const createWeatherGraph = (weatherData) => {
    resetDataArray();
    //create for loop that loops over data
    for(let i = 0; i < weatherData.length; i++){
        console.log(weatherData[i]);
        //push the data for every object in the arrays
        date.push(weatherData[i].dt_txt.split(":")[0]+"h");
        timeStamps.push(weatherData[i].dt);
        temperature.push(weatherData[i].main.temp);
        minTemperature.push(weatherData[i].main.temp_min);
        maxTemperature.push(weatherData[i].main.temp_max);
    }
    showsGraphic(temperatureChart, date, temperature, minTemperature, maxTemperature);
    createDateText(timeStamps);
    temperatureChart.update();
}
let temperatureChart = createChart(date, temperature, minTemperature, maxTemperature);

//Clear the arrays
const resetDataArray = () => {
    date = [];
    temperature = [];
    minTemperature = [];
    maxTemperature = [];
    timeStamps = [];
}