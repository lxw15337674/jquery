$(document).ready(function () {
    console.log("加载成功");
    $('#letter-a').click(function (event) {
        event.preventDefault();
        $.ajax({
            url:'a.html',
            success:function (data) {
                $('#dictionary').html(data);
            }
        })
        // $('#dictionary').hide().load('a.html',function () {
        //     $(this).fadeIn();
        // });
    })
    $('#letter-b').click(function (event) {
        console.log('运行');
        event.preventDefault();
        $.getJSON('b.json', function (data) {
            var html = '';
            $.each(data, function (entryIndex, entry) {
                html += '<div class="entry">';
                html += '<h3 class="term">' + entry.term + '</h3>';
                html += '<div class="part">' + entry.part + '</div>';
                html += '<div class="definition">';
                html += entry.definition;
                if (entry.quote) {
                    html += '<div class="quote">';
                    $.each(entry.quote, function (lineIndex, line) {
                        html += '<div class="quote-line">' + line + '</div>';
                    });
                    if (entry.author) {
                        html += '<div class="quote-author">' + entry.author + '</div>';
                    }
                    html += '</div>';
                }
                html += '</div>';
                html += '</div>';
            });
            $('#dictionary').html(html);
        });
        // $('#dictionary').load('a.html');
        // alert('加载完毕');
    })

    $('#letter-c').click(function (event) {
        event.preventDefault();
        $.getScript('c.js')
    });
    $('#letter-d').click(function (event) {
        event.preventDefault();
        $.get('d.xml', function (data) {
            $('#dictionary').empty();
            $(data).find('entry').each(function () {
                var $entry = $(this);
                var html = '<div class="entry">';
                html += '<h3 class="term">' + $entry.attr('term');
                html += '</h3>';
                html += '<div class="part">' + $entry.attr('part');
                html += '</div>';
                html += '<div class="definition">';
                html += $entry.find('definition').text();
                var $quote = $entry.find('quote');
                if ($quote.length) {
                    html += '<div class="quote">';
                    $quote.find('line').each(function () {
                        html += '<div class="quote-line">';
                        html += $(this).text() + '</div>';
                    });
                    if ($quote.attr('author')) {
                        html += '<div class="quote-author">';
                        html += $quote.attr('author') + '</div>';
                    }
                    html += '</div>';
                }
                html += '</div>';
                html += '</div>';
                $('#dictionary').append($(html));
            })
        })
    })
    $('#letter-e').click(function (event) {
        event.preventDefault();
        var requestData = {term: $(this).text()};
        $.get('e.php', requestData, function (data) {
            $('#dictionary').html(data);
        }).fail(function (jqXHR) {
            $('#dictionary')
                .html('错误：'+jqXHR.status)
                .append(jqXHR.responseText)
        })
    })
    $('#letter-h').click(function (event) {
        event.preventDefault();
        $('#dictionary').load('h.html  .entry');
    })
});
$(document).ready(function () {
    $('<div id="loading">Loading...</div>')
        .insertBefore('#dictionary')
});
$(document).ready(function () {
    var $loading = $('<div id="loading">Loading...</div>')
        .insertBefore('#dictionary');
    $(document).ajaxStart(function () {
        $loading.show();
    }).ajaxStop(function () {
        $loading.hide();
    });
});

$(document).ready(function () {
    $('body').on('click','h3.term',function () {
        $(this).siblings('.definition').slideToggle();
    })
})