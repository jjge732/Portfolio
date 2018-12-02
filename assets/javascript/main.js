$('#landingImageContainer').hover(function() {
    $('#landingImageContainer img').remove();
    $('#landingImageContainer').append($('<img alt="color" id="landingImage">'));
}, function() {
    $('#landingImageContainer img').remove();
    $('#landingImageContainer').append($('<img alt="black & white" id="alternateLandingImage">'));
});



$(document).scroll('header', function() {
    $('header').attr('style', `background-color: rgba(164, 189, 212, ${$(window).scrollTop() / 3}%);`);
    $('h1, h2').attr('style', `color: rgb(${360 - $(window).scrollTop() * 3}, ${360 - $(window).scrollTop() * 3}, ${360 - $(window).scrollTop() * 3});`)
    if ($(window).scrollTop() === 0) {
        $('header').attr('id', '');
    } else if ($(window).scrollTop() > 300) {
        $('header').attr('style', 'background-color:rgba(164, 189, 212, 100%);');
        $('h1, h2').attr('style', 'color: rgb(51, 51, 51);');
    };
    if ($(window).scrollTop() > 0) {
        $('header').attr('id', 'scrolled')
    };
});

setInterval(function() {
    if (window.matchMedia('(max-width: 835px)').matches) {
        $('header h2').remove();
    } else {
        $('header').html("<h1>John Eastwood</h1><h2><a href='#portfolio'>Porfolio</a></h2>")
    }
}, 1);
