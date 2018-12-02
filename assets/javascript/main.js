$('#landingImageContainer').hover(function() {
    $('#landingImageContainer img').remove();
    $('#landingImageContainer').append($('<img alt="color" id="landingImage">'));
}, function() {
    $('#landingImageContainer img').remove();
    $('#landingImageContainer').append($('<img alt="black & white" id="alternateLandingImage">'));
});



$(document).scroll('header', function() {
        $('header').attr('id', 'scrolled')
    if ($(window).scrollTop() === 0) {
        $('header').attr('id', '');
    }
});

setInterval(function() {
    if (window.matchMedia('(max-width: 835px)').matches) {
        $('header h2').remove();
    } else {
        $('header').html("<h1>John Eastwood</h1><h2><a href='#portfolio'>Porfolio</a></h2>")
    }
}, 1);