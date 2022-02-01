//Added more function to this file
import {createWeatherGraph} from "./extractWeatherData.js";

//In the home page the user can enter the city of his/her choice (think of the right HTML elements here)
    //Import key from config.js file
    import APIKey from "./config.js";

    //Get your input field out of your html
    const inputField = document.querySelector("input");

    /**
     * grab the weather information, based on the location provided by the input field and display it in the html
     * @param event the key up event that was triggered
     */
    //On clicking the SUBMIT button or pressing ENTER the application will display the weather for the next 5 days
    const getLocationInformation = (event) => {
        if(event.key == "Enter"){
            console.log(inputField)
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputField.value + '&appid=' + APIKey.key + '&units=metric')
                .then(response => response.json())
                .then(data => createWeatherGraph(data.list));
        }
    }

    //Add an event listener on the input
    inputField.addEventListener("keyup", getLocationInformation);
