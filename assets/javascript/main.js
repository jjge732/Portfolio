$('#landingImageContainer header').hover(function() {
    $('#landingImageContainer img').remove();
    $('#landingImageContainer').append($('<img alt="color" id="alternateLandingImage">'));
}, function() {
    $('#landingImageContainer img').remove();
    $('#landingImageContainer').append($('<img alt="black & white" id="landingImage">'));
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
        $('header').html("<h1>John Eastwood</h1><div><h2><a href='#'>About</a></h2><h2><a href='#'>Porfolio</a></h2><h2><a href='#'>Contact</a></h2></div>")
    }
}, 1);

