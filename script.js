$(document).ready(function(){
    $('i').click(function(){
        $('body').toggleClass('body-light');
        $('.card').toggleClass('card-light');
        $('.location').toggleClass('location-light');
        $('.img').toggleClass('img-light');
        $('.button').toggleClass('button-light');
        $('.fa-solid').toggleClass('fa-moon');
        $('.fa-solid').css('color', 'seagreen');
    });
});
