// Enables parallax on jumbrotron image when scrolling
$(window).scroll((e) => {
    var jumboHeight = $('.jumbotron').outerHeight();
    var scrollDistance = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight - scrollDistance) + 'px');
});