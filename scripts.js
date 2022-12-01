function sendMessage() {
    var confirmation = document.querySelector("#confirmation");
    confirmation.style.visibility = "visible";
    return;
}

$('#send-button').click(function (e) {
    // custom handling here
    e.preventDefault();
});