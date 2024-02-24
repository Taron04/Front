let div = document.getElementById('hello');
var display = false;
let show = document.getElementById('Show')

function hideshow() {
    if (display) {
        div.style.display = 'inline-block';
        display = !display;
        div.innerHTML = 'Hello';
        show.innerHTML = 'Hide';
    }
    else {
        div.style.display = 'none';
        display = !display;
        show.innerHTML = 'Show';

    }
} 
