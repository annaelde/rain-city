// Enables parallax on hero image when scrolling
if (!/Mobi/.test(navigator.userAgent)) {
    $(window).scroll(function(e) {
        requestAnimationFrame(function() {
            if ($('.hero').offset().top < $(window).scrollTop() + 56) {
                var distance = $(window).scrollTop() - $('.hero').offset().top
                var half = distance + 'px'
                $('.hero')
                    .find('img')
                    .css('top', half)
            } else {
                $('.hero')
                    .find('img')
                    .css('top', '-56px')
            }
        })
    })
}
