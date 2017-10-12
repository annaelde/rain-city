// Enables parallax on hero image when scrolling

// Only assign event listener on desktop
if (!/Mobi/.test(navigator.userAgent)) {
    $(window).scroll(function(e) {
        requestAnimationFrame(function() {
            if ($('.hero').offset().top < $(window).scrollTop()) {
                var distance = $(window).scrollTop() - $('.hero').offset().top
                var half = distance + 'px'
                $('.hero img').css('top', half)
            } else $('.hero img').css('top', '0')
        })
    })
}