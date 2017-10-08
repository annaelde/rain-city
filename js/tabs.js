// Controls toggling active tab
$('.frame-nav .nav-link').click(function() {
    $('.frame-nav .nav-link').each(function() {
        $(this).removeClass('active')
    })
    $(this).toggleClass('active')
})
