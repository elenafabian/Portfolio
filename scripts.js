function sendMessage() {
    var confirmation = document.querySelector("#confirmation");
    confirmation.style.visibility = "visible";
    return;
}

function loadDoc(event) {
    preventDefault(event);

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementsByClassName("contact-body-right2").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();

    var confirmation = document.querySelector("#confirmation");
    confirmation.style.visibility = "visible";
    return;
  }