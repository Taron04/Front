let div = document.getElementById('hello');
var display = false;

function hideshow() {
    if (display) {
        div.style.display = 'inline-block';
        display = !display;
        div.innerHTML = 'Hello';
    }
    else {
        div.style.display = 'inline-block';
        display = !display;
        div.innerHTML = 'Bye';
    }
} 