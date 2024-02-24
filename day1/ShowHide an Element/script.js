var div = document.getElementById('main');
var display = false;

function hideshow() {
    if (display) {
        div.style.display = 'inline-block';
        display = !display;
    }
    else {
        div.style.display = 'none';
        display = !display;
    }
} 