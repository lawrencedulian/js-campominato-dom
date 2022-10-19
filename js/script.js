

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

const selectedLevel = document.getElementById("level");
const gridElement = document.getElementById("grid");
document.getElementById("play-btn").addEventListener("click", startGame);

const userNumbers = [];

// Inizio del gioco
function startGame () {
    const level = parseInt(selectedLevel.value);
    let squareNumbers;
    switch (level) {
      case 1: squareNumbers = 100;
              break;
      case 2: squareNumbers = 81;
              break;
      case 3: squareNumbers = 49;
              break;
    }
    // Generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    const bombsArray = generateRandomOrderArray(16, squareNumbers);
    console.log(bombsArray);
    gridElement.innerHTML = "";
    for (let i = 1; i <= squareNumbers; i++) {
        // Crea elementi dentro la tabella 
        const newSquare = createSquare (i, bombsArray);
        // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
        newSquare.addEventListener("click", onClick);
        gridElement.append(newSquare);
    }
gridElement.classList.remove("d-none");
}



//FUNZIONI
/**
 * Description: Funzione che crea un elemento html che rappresenta un quadrato della griglia
 * @param {number} innerNumber - numero da mostrare nel quadrato
 * @returns {object} Elemento Html del quadrato
 */
function createSquare(innerNumber, bombsArray) {
    const square = document.createElement("div");
    square.innerHTML = `<span>${innerNumber}</span>`
    square.classList.add("square");
    if (bombsArray.includes(innerNumber)) {
       square.classList.add("bomb");
    }
    return square;
}

/**
 * Description: Funzione che gestisce il click sullo square
 */
function onClick() {
    if (this.classList.contains("bomb")) {
      this.classList.add("bg-red");
    } else {
      console.log(parseInt(this.textContent)); 
      this.classList.add("bg-blue");
    }
}

/**
 * Description: Genera un numero random in range tra min e max (inclusi)
 * @param {number} min
 * @param {number} max
 * @returns {number} un numero intero generato in modo random
 */
 function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

/**
 * Description: La funzione che genera tutti i numeri da 1 a arrayLength in ordine casuale senza numeri doppi
 * @param {number} arrayLength
 * @returns {Array} Array di numeri in ordine casuale di lunghezza arrayLength
 */
 function generateRandomOrderArray(arrayLength, squareNumbers) {
    const numbersArray = [];
    while (numbersArray.length < arrayLength) {
      const rndNumber = getRndInteger(1, squareNumbers);
      if (!numbersArray.includes(rndNumber)) {
        numbersArray.push(rndNumber);
      }
    }
    return numbersArray;
  }
  