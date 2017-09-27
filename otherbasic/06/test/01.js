$(document).ready(function () {
    console.log("加载完成");
    // $('#letter-a').click(function (event) {
    //     event.preventDefault();
    //     $('#dictionary').load('exercises-content.html .letter')
    // })
    $('h3').mouseover(function () {
        var letter_id = $(this).parent().attr('id');
        $('#dictionary').load('notexist.html #' + letter_id, function (response, status, xhr) {
            if (status == 'error') {
                var msg = "sorry but there was an error";
                $('#dictionary').html(msg + xhr.status + '' + xhr.statusText)
            }
        })
    });
});
$(document).ready(function () {
    $.getJSON('https：//api.github.com/users/jquery/repos', function (data) {
        var html = '';
        $.each(data, function (jsonIndex, json_val) {
            html += '<ul style="list-style-type:none;">' + (jsonIndex + 1);
            html += '<li>name: ' + json_val.name + '</li>';
            html += '<li>html_url: ' + json_val.html_url + '</li>';
            html += '</ul>';
        });
        $('#dictionary').html(html);
    });
});