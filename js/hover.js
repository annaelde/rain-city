// Anna Elde
// August 1, 2017
// This script sets up mouseover/mouseout event handlers
// to show extra information about an image when hovering over it

(function ()
{
    // Get elements
    var gallery = document.getElementById("hover-items");
    var images = gallery.getElementsByClassName("item");

    // Add event listeners
    for (var i = 0; i < images.length; i++)
    {
        images[i].addEventListener("mouseover", function ()
        {
            var caption = this.getElementsByClassName("caption")[0];
            caption.classList.remove("hide");
            caption.classList.add("show");
        })

        images[i].addEventListener("mouseout", function ()
        {
            var caption = this.getElementsByClassName("caption")[0];
            caption.classList.remove("show");
            caption.classList.add("hide");
        })
    }

})();
