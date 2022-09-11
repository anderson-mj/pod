$(document).ready(function(){
    $('.matricula').mask('000.000.000');
    $('.phone').mask('(00) 00000-0000');
});

function clearMessage() {
    $('#message-text').val('');
}