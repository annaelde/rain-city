// Anna Elde
// August 1, 2017
// This script uses cookies to determine whether the user has visited the site 
// before and displays a special message based on that

(function ()
{

    // Element to set message in
    var e = document.getElementById("user-state");

    // Message to set
    var m = "";

    // See if cookie has already been set
    if (checkCookie())
    {
        m = "Thanks for visiting this site again. I hope you find out new and interesting things about Seattle!";
    }
    else
    {
        m = "I see you're new to this site. Where to start? I recommend the History page first to read a little bit about Seattle's rich history&mdash;but the Food section is a pretty tasty place to start too!";
        createCookie();
    }

    // Display message
    if (e != undefined) e.innerHTML = m;

    // Create cookies to track user
    function createCookie()
    {
        // Generate expire date
        var expireDate = new Date();
        expireDate.setMonth(expireDate.getMonth() + 6);

        // Store that the user has visited the site
        var cookie = "visited=true" + ";expires=" + expireDate + "; ";
        document.cookie = cookie;
    }

    // Check if cookie exists
    function checkCookie()
    {
        if (document.cookie != "")
        {
            var cookies = document.cookie.split("; ");

            for (var i = 0; i < cookies.length; i++)
            {
                // Split the cookie to get the name of the cookie
                var cookieData = cookies[i].split(";");
                var cookieValue = cookieData[0].split("=");

                // Found the cookie, return true.
                if ("visited" == cookieValue[0]) return true;
            }

            // Didn't find our cookie, return false.
            return false;
        }
        else return false; // Return false if no cookies set in browser
    }

})();