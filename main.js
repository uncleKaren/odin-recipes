let color = 'black';

function myGrid(size) {
    let grid_container = document.querySelector(".grid_container");
    let squares = grid_container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid_container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid_container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let item = document.createElement('div');
        item.addEventListener("mouseover", colorSquare);
        item.style.backgroundColor = 'white';
        grid_container.insertAdjacentElement("beforeend", item);
    }
}

myGrid(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        myGrid(input);
    } else {
        console.log("invalid amount");
    }
}

function colorSquare() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let grid_container = document.querySelector(".grid_container");
    let squares = grid_container.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}