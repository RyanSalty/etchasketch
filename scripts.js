let grid = document.getElementById('grid');
let gridLength = 50;


createSquares(gridLength, grid);
const squares = Array.from(document.querySelectorAll('.square'));
squares.forEach(square => square.addEventListener('mouseover', hoverEvent));

function createSquares(gridLength, grid){
    let gridWidth = grid.offsetWidth;
    let squareSize = gridWidth / gridLength;
    for (let i = 0; i < Math.pow(gridLength,2); i++){
        let newSquare = document.createElement('div');
        newSquare.setAttribute("class", "square");
        newSquare.style.width = squareSize + "px";
        newSquare.style.height = squareSize + "px";
        grid.appendChild(newSquare);
    }
}

function removeSquares(grid){

}

function hoverEvent(e){
    e.target.classList.add('filled');
}

function newGrid() {
    let gridLength = prompt("Please enter how many squares you would like per row on your sketchpad. 0-100");
    let grid = document.getElementById('grid');
    let msg = document.getElementById('msg');

    if (isNaN(gridLength) || gridLength > 100 || gridLength < 1){
        msg.innerHTML = "Error: Please enter a number between 0 and 100."
    } else {
        msg.innerHTML = "Current sketchpad is " + gridLength + " x " + gridLength + ".";
    }
}

function enableHover(){

}
