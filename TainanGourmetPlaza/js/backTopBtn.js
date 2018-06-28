$(document).ready(function() {
    var offset = 220;
    var duration = 500;
    
    if ($(this).scrollTop() > offset) {
        $('.backTopBtn').fadeIn(duration);
    } else {
        $('.backTopBtn').fadeOut(duration);
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.backTopBtn').fadeIn(duration);
        } else {
            $('.backTopBtn').fadeOut(duration);
        }
    });

    $('.backTopBtn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});