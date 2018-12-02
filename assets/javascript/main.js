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
        $('#toTop').remove();
    } else if ($(window).scrollTop() > 300) {
        $('header').attr('style', 'background-color: rgb(164, 189, 212);');
        $('h1, h2').attr('style', 'color: rgb(51, 51, 51);');
    }
    if  ($(window).scrollTop() > 500 && $('#toTop').text() === '') {
        $('header').append($('<span id="toTop"><a href="#landingImageContainer">Back to top</a></span>'))
    } else if ($(window).scrollTop() < 500){
        $('#toTop').remove();
    }
    if ($(window).scrollTop() > 0) {
        $('header').attr('id', 'scrolled')
    };
});

setInterval(function() {
    if (window.matchMedia('(max-width: 835px)').matches) {
        $('header h2 a').empty();
    } else if (window.matchMedia('(min-width: 835px)').matches) {
        $('header h2 a').text("Porfolio")
    };
}, 1);

$('#clickableImg1').hover(function() {
    $(this).attr('src', 'assets/images/screenshots/chi-X-screenshot.jpg')
}, function() {
    $(this).attr('src', 'assets/images/screenshots/chi-X-screenshot-ConvertImage.jpg')
});

$('#clickableImg2').hover(function() {
    $(this).attr('src', 'assets/images/screenshots/trivia-screenshot.jpg')
}, function() {
    $(this).attr('src', 'assets/images/screenshots/trivia-screenshot-ConvertImage.jpg')
});