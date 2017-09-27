$(document).ready(function () {
    console.log("加载成功");
    $('div.chapter a[href*="wikipedia"]').attr({
        rel: 'external',
        title: function () {
            return '点击查看' + $(this).text();
        },
        id: function (index, oldValue) {
            return 'wikilink-' + index;
        }
    });

    $('<a href=#top style="background-color: red">back to top</a>').appendTo('div.chapter p:eq(1)');
    $('<a id="top">').prependTo('body');

    // $('span.footnote').insertBefore('#footer')
    //     .wrapAll('<ol id="notes"></ol>')
    //     .wrap('<li></li>');
});

$(document).ready(function () {
    var $notes = $('<ol id="notes"></ol>')
        .insertBefore('#footer');
    $('span.footnote').each(function(index) {
        $(this)
            .before([
                '<a href="#footnote-',
                index + 1,
                '" id="context-',
                index + 1,
                '" class="context">',
                '<sup>',
                index + 1,
                '</sup></a>'
            ].join(''))
            .appendTo($notes)
            .append([
                '&nbsp;(<a href="#context-',
                index + 1,
                '">context</a>)'
            ].join(''))
            .wrap('<li id="footnote-' + (index + 1) + '"></li>');
    });
});

$(document).ready(function () {
    $('span.pull-quote').each(function (index) {
        var $parentParagraph = $(this).parent('p');
        $parentParagraph.css('position','relative');
        var $clonedCopy = $(this).clone();
        $clonedCopy
            .addClass('pulled')
            .find('span.drop')
            .html('&hellip;')
            .end()
            .text($clonedCopy.text())
            .prependTo($parentParagraph)

    })
});
