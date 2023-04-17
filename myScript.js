function makeGrid(myNumber){
    let container = document.querySelector(".container");
    let newDiv;

    for (let i = 0; i < myNumber; i++){
        newDiv = document.createElement("div");
        newDiv.classList.add("grid_block");
        container.append(newDiv);
    }
}

makeGrid(16);
