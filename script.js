$(document).ready(function() {
    var thecolumns = 16;
    var draw = function (columns) {
        for (i = 0; i < columns - 1; i++) {
            for (x = 0; x < columns; x++) {
                $('.container').append('<div class="box"></div>');
                if (x === columns) {
                    $('.container').append('<br/>');
                }
            }
        }
        var percent = (1 / columns) * 100;
        $('div.box').css('width', (percent + '%'));
        $('div.box').css('height', (percent + '%'));
        $('div.box').mouseenter(function () {
            $(this).addClass('red');
        });
    };
    draw(thecolumns);
    $('input').on('click', function () {
        thecolumns = parseInt(prompt("How many columns?"), 10);
        $('.box').remove();
        $('.red').removeClass('red');
        draw(thecolumns);
    });
});