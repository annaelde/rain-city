// Anna Elde
// August 1, 2017
// Script to use OpenWeather API to display weather data for Seattle
// Updated from class project to include error handling

// Run script on page load
(function ()
{
    // Get all elements
    var current = document.getElementById("current_temp");
    var low = document.getElementById("low_temp");
    var high = document.getElementById("high_temp");
    var humidity = document.getElementById("humidity");
    var clouds = document.getElementById("clouds");
    var direction = document.getElementById("wind_direction");
    var speed = document.getElementById("wind_speed");
    var overall = document.getElementById("overall");

    // Initialize XMLHttpRequest
    var xhr = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?id=5809844&APPID=5156c99a94135d37e799dcc7e560ed22";

    // Assign event handler to XMLHttpRequest
    xhr.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
            update(JSON.parse(this.responseText));
    }

    // Send request
    xhr.open("GET", url, true);
    xhr.send();

    // Updates UI to include data
    function update(json)
    {
        // Convert temperatures to celsius (two decimal places)
        if (json.main.temp != undefined)
            current.innerHTML = (json.main.temp - 273.15).toFixed(2) + " &deg;C";
        else current.innerHTML = "N/A";
        if (json.main.temp_min != undefined)
            low.innerHTML = (json.main.temp_min - 273.15).toFixed(2) + " &deg;C";
        else low.innerHTML = "N/A";
        if (json.main.temp_max != undefined)
            high.innerHTML = (json.main.temp_max - 273.15).toFixed(2) + " &deg;C";
        else high.innerHTML = "N/A";

        // Describe conditions
        if (json.main.humidity != undefined)
            humidity.innerHTML = json.main.humidity.toFixed(0) + "%";
        else humidity.innerHTML = "N/A";
        if (json.clouds.all != undefined)
            clouds.innerHTML = json.clouds.all.toFixed(0) + "% Cloudy";
        else clouds.innerHTML = "N/A";
        if (json.wind.deg != undefined)
            direction.innerHTML = json.wind.deg.toFixed(0) + "&deg;";
        else direction.innerHTML = "N/A";
        if (json.wind.speed != undefined)
            speed.innerHTML = json.wind.speed.toFixed(1) + " m/s";
        else speed.innerHTML = "N/A";
        
        // Add overall condition statement
        if (json.weather[0].main != undefined)
            overall.innerHTML = json.weather[0].main;
        else overall.innerHTML = "N/A";
    }

})();