$(document).ready(function () {
    console.log("加载成功");

    var $p = $('div.chapter p').eq(2).nextAll();
    $('<a href="#top" style="background-color: #e5e5e5" id="back">back to top</a>').appendTo($p);
    $('<a id="top"></a>').prependTo('body');

    $('a[href="#top"]').click(function () {
        $('<p style="background-color: red">你在这里</p>').insertAfter(this)
    })

    var $name = $('#f-author');
    $name.click(function () {
        console.log($(this).html());
        if ($(this).html() == "by Edwin A. Abbott") {

            $(this).html('<b>' + $(this).text() + '</b>')
        } else {
            $(this).html('by Edwin A. Abbott');
        }
    })

    $('p').each(function () {
        $(this).wrap("<div class='inhabitants'></div>");
    })


});