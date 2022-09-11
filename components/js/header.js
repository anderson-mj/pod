$(document).ready(function () {
    $('.matricula').mask('000.000.000');
    $('.phone').mask('(00) 00000-0000');
});

function clearMessage() {
    $('#message-text').val('');
}

var form = document.getElementById("suggestion-form");

async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });
}
form.addEventListener("submit", handleSubmit)