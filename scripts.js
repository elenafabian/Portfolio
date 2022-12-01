function sendMessage() {
    var confirmation = document.querySelector("#confirmation");
    confirmation.style.visibility = "visible";
    return;
}

$("#cpa-form").submit(function(e){
  e.preventDefault();
});

function loadDoc(event) {
    event.preventDefault();

    /* const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementsByClassName("contact-body-right2").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send(); */

    var confirmation = document.querySelector("#confirmation");
    confirmation.style.visibility = "visible";
    return;
  }