// Enables parallax on hero image when scrolling
$(window).scroll(function(e) {
    if ($('.hero').offset().top < $(window).scrollTop() + 56) {
        var distance = $(window).scrollTop() - $('.hero').offset().top
        var half = distance + 'px'
        $('.hero').find('img').css('top', half)
    } else {
        $('.hero').find('img').css('top', '-56px')
    }
})
