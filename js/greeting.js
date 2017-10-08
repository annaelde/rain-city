// Anna Elde
// August 1, 2017
// Script to show the time of day in the user's local time zone,
// the time of day in Seattle's time zone, and a greeting that's
// appropriate to the time of day.

(function ()
{
    var greeting = document.getElementById("greeting");

    // Get current time
    var time = new Date();
    var localHour = time.getHours();
    var localMinutes = time.getMinutes();

    // Begin creating greeting for user
    var message = timeGreeting(localHour, localMinutes) + " It's currently " + twelveHourFormat(localHour, localMinutes) + " in your timezone.";

    // Find Seattle's time
    var seaHour = seaTime(time.getUTCHours());
    var seaMinutes = time.getUTCMinutes();

    // Add to message
    message += " In Seattle, it's currently " + twelveHourFormat(seaHour, seaMinutes) + ". ";

    // Set message
    greeting.innerHTML = message;

    // Returns time in Seattle
    function seaTime(hour)
    {
        var t = 0;

        if (hour < 7)
            t = 24 - 7 + hour;
        else if (hour == 7)
            t = 0;
        else if (hour > 7 && hour < 24)
            t = hour - 7;
        else
            t = 24 - 7;

        return t;
    }

    // Returns time in twelve hour format
    function twelveHourFormat(hour, minutes)
    {
        // Time to return
        var t = "";

        if (hour < 12)
        {
            // Special case for midnight
            if (hour == 0) t += "12";
            else t += hour;

            if (minutes == 0) t += "AM";
            else if (minutes < 10) t += ":0" + minutes + "AM"
            else t += ":" + minutes + "AM";
        }
        else
        {
            // Special case for noon
            if (hour == 12) t += "12";
            else t += (hour - 12);

            if (minutes == 0) t += "PM";
            else if (minutes < 10) t += ":0" + minutes + "PM"
            else t += ":" + minutes + "PM";
        }

        return t;
    }

    // Returns greeting based on time of day
    function timeGreeting(hour, minutes)
    {
        // Greeting to return
        var t = "";

        // Cycle through possible times of day
        if (hour >= 0 && hour < 3)
        {
            t += "Good evening.";
        }
        else if (hour >= 3 && hour < 12)
        {
            t += "Good morning.";
        }
        else if (hour >= 12 && hour < 18)
        {
            t += "Good afternoon.";
        }
        else if (hour >= 18)
        {
            t += "Good evening."
        }

        return t;
    }

})();