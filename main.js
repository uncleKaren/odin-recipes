function myGrids(number) {
    let container = document.querySelector(".container");
    for (let l = 1; l < number + 1; l++) {
        for (let i = 1; i < number + 1; i++) {
            let div = document.createElement("div");
            div.classList.add("grid_element");
            div.append(i);
            container.append(div);
        }
    }
}

myGrids(16);