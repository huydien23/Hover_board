var container = document.querySelector('.container');
function randomColor() {
    var charColor = '0123456789ABCDEF';
    var color = '#';

    for(var i = 0; i < 6; i++) {
        color += charColor[Math.floor(Math.random() * charColor.length)];
    }
    return color;
}

for(var i = 0; i < 200; i++) {
    var square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseenter', function(e) {
        var color = randomColor();
        var el = e.currentTarget;
        el.style.backgroundColor = color;
        el.style.boxShadow = `0 0 100px ${color}, 0 0 100px ${color}`;
    });
    
    square.addEventListener('mouseleave', function(e) {
        var el = e.currentTarget;
        if (el) { // Check if the element still exists
            el.style.backgroundColor = '#1d1d1d';
            el.style.boxShadow = '0 0 2px #000';
        }
    });
}

