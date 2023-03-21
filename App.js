const colorSelect = document.getElementById('color-select');
const squareContainer = document.getElementById('square-container');
squareContainer.addEventListener('click', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const square = document.createElement('div');
    square.className = 'square';
    let color;
    if(colorSelect.value !== 'random') {
        color = colorSelect.value;
    } else {
        color = getRandomColor();
    }
    square.style.backgroundColor = color;
    square.addEventListener('click', function(event) {
        event.target.parentNode.removeChild(event.target);
    });
    square.style.position = 'absolute';
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.top = mouseY - 25 + 'px'; // subtract half of height
    square.style.left = mouseX - 25 + 'px'; // subtract half of width
    squareContainer.appendChild(square);
});
const randomColorBtn = document.getElementById('random-color-btn');
randomColorBtn.addEventListener('click', function(event) {
    colorSelect.value = 'random';
});
const clearSquaresBtn = document.getElementById('clear-btn');
clearSquaresBtn.addEventListener('click', function(event) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(function(square) {
        square.parentNode.removeChild(square);
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}