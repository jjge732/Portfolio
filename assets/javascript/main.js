$('#landingImageContainer header').hover(function() {
    $('#landingImageContainer').remove('#landingImage');
    $('#landingImageContainer').append($('<img alt="color" id="alternateLandingImage">'));
}, function() {
    $('#landingImageContainer').remove('#alternateLandingImage');
    $('#landingImageContainer').append($('<img alt="black & white" id="landingImage">'));
});

$(document).scroll('header', function() {
        $('header').attr('id', 'scrolled')
    if ($(window).scrollTop() === 0) {
        $('header').attr('id', '');
    }
});

