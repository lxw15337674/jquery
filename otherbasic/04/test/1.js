$(document).ready(function () {
    $('body').css('display', 'none').fadeIn('slow')

    $('p').mouseover(function () {
        $(this).css('background-color', "yellow")
    }).mouseleave(function () {
        $(this).css('background-color', "white")
    });

    $('h2').click(function () {
        $(this)
            .animate({
                'opacity': 0.25,
                marginLeft: '+=20px'
            }, 'slow', function () {
                $('.speech').fadeTo('slow', 0.5)
            })
    })

    $(document).keyup(function (event) {
        var triggers = {
            37: { left: '-=20px' },    //左
            38: { top: '-=20px' },    //上
            39: { left: '+=20px' },    //右
            40: { top: '+=20px' },    //下
        };
        $('#switcher').css('position', 'relative')
            .animate(triggers[event.which], 'fast')
    })
});