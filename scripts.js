function sendMessage() {
    var confirmation = document.querySelector("#confirmation");
    confirmation.style.visibility = "visible";
    return;
}

$('#form').submit(function (e) {
    // custom handling here
    e.preventDefault();
});