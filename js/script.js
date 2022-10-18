// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


const gridElement = document.getElementById("grid");
document.getElementById("play-btn").addEventListener("click", startGame);
gridElement.innerHTML = "";



function startGame () {
for (let i = 1; i <= 100; i++) {
    const newSquare = createSquare (i);
    newSquare.addEventListener("click", onClickColor);
    gridElement.append(newSquare);
}
gridElement.classList.remove("d-none");
}

/**
 * Description: Funzione che crea un elemento html che rappresenta un quadrato della griglia
 * @param {number} innerNumber - numero da mostrare nel quadrato
 * @returns {object} Elemento Html del quadrato
 */
function createSquare(innerNumber) {
    const square = document.createElement("div");
    square.innerHTML = `<span>${innerNumber}</span>`
    square.classList.add("square");
    return square;
}

/**
 * Description: Funzione che gestisce il click sullo square
 */
function onClickColor() {
    console.log(parseInt(this.textContent));
    this.classList.toggle("bg-blue");
}
