$(document).ready(function () {
    var $books = $('#books');
    $books.cycle({
        timeout: 100,
        speed: 50,
        pause: true,
        before:function () {
            $('#slider').slider('value',$('#books li').index(this));
        }
    });
    var $controls = $('<div id="books-controls"></div>')
        .insertAfter($books);
    $('<button>Pause</button>').click(function(event) {
        event.preventDefault();
        $books.cycle('pause');
        $.cookie('cyclePaused', 'y');
    }).button({
        icons:{primary:'ui-icon-pause'}
    }).appendTo($controls);
    $('<button>Resume</button>').click(function(event) {
        event.preventDefault();
        var $paused = $('ul:paused');
        if ($paused.length) {
            $paused.cycle('resume');
        }
        else {
            $(this).effect('shake', {
                distance: 10
            });
        }
        $.cookie('cyclePaused', null);
    }).button({
        icons:{primary:'ui-icon-play'}
    }).appendTo($controls);
    console.log($.cookie('cyclePaused'));
    if($.cookie('cyclePaused')){
        $books.cycle('pause');
    }
    $books.hover(function() {
        $books.find('.title').animate({
            backgroundColor: '#eee',
            color: '#000'
        }, 1000);
    }, function() {
        $books.find('.title').animate({
            backgroundColor:'red',
            color: 'blue'
        }, 1000);
    });
    $('h1').click(function () {
        $(this).toggleClass('highlighted','slow','easeInExpo');
    });
    var $books = $('#books');
    $books.find('.title').resizable({
        handles: 's'
    });
    $('button').button();
    $('<div id="slider"></div>').slider({
        min:0,
        max:$('#books li').length-1,
        slide:function (event,ui) {
            $books.cycle(ui.value);
        }
    }).appendTo($controls)
});
