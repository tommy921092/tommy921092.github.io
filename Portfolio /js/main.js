// var $portfolio =$('.starter');
// var $win=$(window);

// $win.on('scroll', function() {
//     var top =$win.scrollTop() / 3 ;
//     console.log(top);
//     $portfolio.css('transform', 'rotate(' + top + 'deg)');
// });

$(document).ready(()=>{
    // magic cursor
    jQuery('body').jstars({
        image_path: 'assets',
        image: 'jstar-map.png',
        style: 'rand',
        width: 27,
        height: 27,
        style_map: {
            white: 0,
            blue: -27,
            green: -54,
            red: -81,
            yellow: -108
        },
        delay: 300
    });

    //square rotation
    $('.square').on('mouseover', function() {
        $(this).css('transform', 'rotate(-30deg)');
        $('.square div').css('transform', 'rotate(-20deg');
    }).on('mouseleave', function() {
        $(this).css('transform', 'rotate(-20deg)');
        $('.square div').css('transform', 'rotate(-10deg');
    })
});

$('#about button').on('click', function() {
    $(this).removeClass('color-1 bounce').addClass('color-2 rotateOut');
    $('#about').css('background', 'url("./assets/rabbit.jpeg")');
    $('about rabbit').addClass('.active-1');
    // $('.lovebunny').toggleClass('.enlarge');
});


