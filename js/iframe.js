// Anna Elde
// August 1, 2017
// This script sets an iFrame of the Seattle Municipal Archive's website
// on the page.

(function ()
{
    var buttons = document.querySelectorAll(".frame-nav .nav-item");
    var links = [];

    // Add event listener to button links
    for (var i = 0; i < buttons.length; i++)
        buttons[i].onclick = setFrame;

    // Initialize the frame to show something
    var frame = document.getElementById("frame");
    frame.src = "history-frame.html";

    // Sets content in frame using the anchor tag's href attribute
    function setFrame()
    {
        var link = this.getElementsByTagName("a")[0];
        var frame = document.getElementById("frame");
        frame.src = link.href;

        // Prevents a new window from opening
        return false;
    }

})();