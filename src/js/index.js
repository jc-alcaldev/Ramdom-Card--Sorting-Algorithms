import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "../style/index.scss";

const drawButton = document.querySelector("#drawButton");
const bubbleSortButton = document.querySelector("#bubbleSortButton");
const selectSortButton = document.querySelector("#selectSortButton");

selectSortButton.addEventListener("click", select);
bubbleSortButton.addEventListener("click", bubble);
drawButton.addEventListener("click", cardGenerator);
const values = [
  1, //si es 1, imprime A en vez de 1
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13
];
const suits = ["hearts", "spades", "clubs", "diamonds"];
var myArray = [];

function randomIndex(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

// FUNCION QUE GENERA SUITS
function selectSuit(content, top, bot) {
  if (content == "") content = randomIndex(suits);
  if (content == "hearts") {
    top.className = "hearts col-4 left-suit d-flex justify-content-center";
    bot.className =
      "hearts-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else if (content == "spades") {
    top.className = "spades col-4 left-suit d-flex justify-content-center";
    bot.className =
      "spades-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else if (content == "clubs") {
    top.className = "clubs col-4 left-suit d-flex justify-content-center";
    bot.className =
      "clubs-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else {
    top.className = "diamonds col-4 left-suit d-flex justify-content-center";
    bot.className =
      "diamonds-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  }
  return content;
}
// FUNCION QUE GENERA VALUE
function selectValue(content, mid) {
  if (content == 0) content = randomIndex(values);
  console.log(content);
  let resultOut = content;
  if (content == 1) {
    content = "A";
  } else if (content == 11) {
    content = "J";
  } else if (content == 12) {
    content = "Q";
  } else if (content == 13) {
    content = "K";
  }
  mid.innerHTML = content;
  return resultOut;
}

// FUNCION QUE CREA LOS DIVS QUE CONTIENEN LA CARTA
function createContent(content) {
  //creamos hijos, nietos y bisnietos
  let child = document.createElement("div");
  let grandChild1 = document.createElement("div");
  let grandChild2 = document.createElement("div");
  let grandChild3 = document.createElement("div");
  let greatGrandSon1 = document.createElement("div");
  let greatGrandSon2 = document.createElement("div");
  let greatGrandSon3 = document.createElement("div");
  //ordenamos hijos dentro de sus padres
  grandChild1.appendChild(greatGrandSon1);
  grandChild2.appendChild(greatGrandSon2);
  grandChild3.appendChild(greatGrandSon3);
  child.appendChild(grandChild1);
  child.appendChild(grandChild2);
  child.appendChild(grandChild3);
  greatGrandSon2.setAttribute(
    "class",
    "value col-4 offset-4 d-flex justify-content-center"
  );
  grandChild1.setAttribute("class", "row");
  grandChild2.setAttribute("class", "row");
  grandChild3.setAttribute("class", "row");
  child.setAttribute("class", "card col-1 w-100");
  child.setAttribute("id", "card");
  if (content == "") {
    let pvacio = "";
    let nvacio = 0;
    let palo = selectSuit(pvacio, greatGrandSon1, greatGrandSon3); //asignamos palo a la carta
    let numero = selectValue(nvacio, greatGrandSon2); //asinamos valor a la carta y se lo añadimos a un array

    myArray.push({ palo: palo, numero: numero });
  } else {
    selectSuit(content.palo, greatGrandSon1, greatGrandSon3);
    selectValue(content.numero, greatGrandSon2);
  }

  return child;
}

// FUNCION QUE GENERA CADA CARTA EN FUNCION DEL NUMERO DEL INPUT Y EL ARRAY CON LOS VALORES
function cardGenerator() {
  myArray = []; //Vaciamos el array generador para la siguiente vuelta
  let myInput = document.querySelector("#myInput").value;
  let father = document.querySelector("#row2");
  father.textContent = "Generator Cards"; //vacia al padre si ya tiene algun contenido, para que no se sobreescriban cartas

  for (let numberOfCards = 1; numberOfCards <= myInput; numberOfCards++) {
    let vacio = "";
    father.appendChild(createContent(vacio));
  }
}

//Funcion que pintara las bubble sorting
function cardBubbleGenerator() {
  let child = document.createElement("div");
  child.setAttribute("class", "rowSort row");

  for (let index = 0; index < myArray.length; index++) {
    child.appendChild(createContent(myArray[index]));
  }
  return child;
}

function bubble() {
  bubbleSort();
}
function select() {
  selectSort();
}

const bubbleSort = () => {
  let wall = myArray.length - 1;
  let father = document.querySelector("#row3");
  father.textContent = "Bubble Sort Cards:"; //Vaciamos el padre desde el principio para no sobreescribir

  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (myArray[index].numero > myArray[index + 1].numero) {
        let aux = myArray[index];
        myArray[index] = myArray[index + 1];
        myArray[index + 1] = aux;
      }
      index++;
    }
    father.appendChild(cardBubbleGenerator());
    wall--;
  }
};

const selectSort = () => {
  let min = 0;
  let father = document.querySelector("#row3");
  father.textContent = "Select Sort Cards: "; //Vaciamos el padre desde el principio para no sobreescribir
  while (min < myArray.length - 1) {
    for (let i = min + 1; i < myArray.length; i++) {
      if (myArray[min].numero > myArray[i].numero) {
        let aux = myArray[min];
        myArray[min] = myArray[i];
        myArray[i] = aux;
      }
    }

    father.appendChild(cardBubbleGenerator());

    min++;
  }
  for (let index = 0; index < myArray.length; index++) {
    console.log("array");
    console.log(myArray[index].numero);
  }
};
