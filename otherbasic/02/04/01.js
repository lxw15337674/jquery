$(document).ready(function () {
    // $('#selected-plays>li>ul>li').addClass('special')
    $('li').addClass('special');
    $('#selected-plays>li').removeClass('special');

    $('td:nth-child(3)').addClass('year');

    $('tr:contains(Tragedy):eq(0)').addClass('special');

    $('a[href$=".pdf"]').parent().parent().addClass('tragedy');
});