<!-- thanks to https://github.com/jamiewilson/form-to-google-sheets for the google sheet connection -->

const scriptURL = 'https://script.google.com/macros/s/AKfycbwaVa4C4kQmoONtjrHuzEfYps0c6x0fqwovo0E19jZl_nw10YkVjA7mFeIapw38aeLmUA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));

    // i added this
    var confirmation = document.querySelector("#confirmation");
    confirmation.style.visibility = "visible";
    var entries = document.querySelectorAll('.entry');
    entries.forEach(function(currentValue, currentIndex, listObj){
        currentValue.style.color = "grey";
    })
})
