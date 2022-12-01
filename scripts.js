function sendMessage() {
    var confirmation = document.querySelector("#confirmation");
    confirmation.style.visibility = "visible";
    return;
}

$('#send-button').submit(function (e) {
    // custom handling here
    return false;
});