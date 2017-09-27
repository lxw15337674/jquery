$(document).ready(function () {
    console.log('引用成功。');
    $('.author').click(function () {
        $(this).addClass('selected')
    });

    $('.chapter-title').dblclick(function () {
        $(this).nextAll().toggleClass('hidden');
        $(this).addClass('hiddenhint')
    });

    var setBodyClass = function (className) {
        $("body").removeClass().addClass(className);
        $("#switcher button").removeClass("selected");
        $("#switcher-" + className).addClass("selected");
    };
    $(document).keyup(function (event) {
        var num = $('#switcher button').filter('.selected').index() - 1;
        if (event.which == 39) num = (num + 1) % 3;
        if (event.which == 37) num = (num - 1) % 3;
        var btnClassname = $(".switcher button").eq(num).attr("id").split("-")[1];
        setBodyClass(btnClassname)
    });

    $(document).mouseover(function (event) {
        console.log("x:"+event.pageX+"y:"+event.pageY);
    });



});