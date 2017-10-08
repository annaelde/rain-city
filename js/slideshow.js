// Anna Elde
// August 1, 2017
// This script creates a slideshow with controls on a page.

(function ()
{
    var currentImage = 0;

    // Array to hold image data. Can use different file names and captions.
    var images = [
        { "file": "0.jpg", "caption": "A pond in the Hoh Rainforest. Yes, that's right, there is a rainforest in Washington State!" },
        { "file": "1.jpg", "caption": "A mossy cluster of trees in the Hoh Rainforest. The forest is one of the greenest places in the world." },
        { "file": "2.jpg", "caption": "Rocks covered in barnacles on Ruby Beach, about a half hour from the Hoh Rainforest." },
        { "file": "3.jpg", "caption": "Ruby Beach is foggy, covered in tide pools and giant rock formations." },
        { "file": "4.jpg", "caption": "Piles of petrified wood on the shore of Ruby Beach from trees that fell off the cliffs due to erosion." },
        { "file": "5.jpg", "caption": "A view from Hurricane Ridge. You can see the glaciers on the mountain tops." },
        { "file": "6.jpg", "caption": "Another view from Hurricane Ridge. The quiet there was absolutely breathtaking." },
        { "file": "7.jpg", "caption": "The wildlife on Hurricane Ridge is well-adapted to the cold, barren winters."}
    ]

    // Get the required elements
    var slideshow = document.getElementById("slideshow");
    var image = slideshow.getElementsByTagName("img")[0];
    var caption = slideshow.getElementsByClassName("figure-caption")[0];

    // Assign event handlers
    slideshow.getElementsByClassName("next")[0].addEventListener("click", function(){
        if (currentImage < images.length - 1)
            currentImage++;
        else currentImage = 0;
        setSlide();
    });

    slideshow.getElementsByClassName("previous")[0].addEventListener("click", function(){
        if (currentImage > 0)
            currentImage--;
        else currentImage = images.length - 1;
        setSlide();
    });

    // Initialize the slideshow
    setSlide();

    function setSlide()
    {
        // Update caption and image file
        image.src = "images/" + images[currentImage].file;
        caption.innerHTML = images[currentImage].caption;
    }

})();