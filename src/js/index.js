/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "../style/index.scss";

const drawButton = document.querySelector("#drawButton");
const bubbleSortButton = document.querySelector("#bubbleSortButton");
bubbleSortButton.addEventListener("click", sort);
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
  11, //si es 11, imprime J
  12, //si es 12, imprime Q
  13 //si es 13, imprime K
];
const suits = ["hearts", "spades", "clubs", "diamonds"];
var myArray = [];
var myArraySlice = myArray.slice(0, myArray.length);

// FUNCION QUE GENERA RANDOM INDEX
function randomIndex(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}
// FUNCION QUE GENERA SUITS
function selectSuit(top, bot) {
  let result = randomIndex(suits);
  if (result == "hearts") {
    top.className = "hearts col-4 left-suit d-flex justify-content-center";
    bot.className =
      "hearts-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else if (result == "spades") {
    top.className = "spades col-4 left-suit d-flex justify-content-center";
    bot.className =
      "spades-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else if (result == "clubs") {
    top.className = "clubs col-4 left-suit d-flex justify-content-center";
    bot.className =
      "clubs-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else {
    top.className = "diamonds col-4 left-suit d-flex justify-content-center";
    bot.className =
      "diamonds-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  }
  return result;
}
// FUNCION QUE GENERA VALUE
function selectValue(mid) {
  let result = randomIndex(values);
  let resultOut = result;
  if (result == 1) {
    result = "A";
  } else if (result == 11) {
    result = "J";
  } else if (result == 12) {
    result = "Q";
  } else if (result == 13) {
    result = "K";
  }
  mid.innerHTML = result;
  return resultOut;
}

// FUNCION QUE CREA LOS DIVS QUE CONTIENEN LA CARTA Y SUS CLASES
function createContent(index) {
  //creamos hijos
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
  //asignamos clases a bisnieto
  greatGrandSon2.setAttribute(
    "class",
    "value col-4 offset-4 d-flex justify-content-center"
  );
  //asignamos clases a los nietos
  grandChild1.setAttribute("class", "row");
  grandChild2.setAttribute("class", "row");
  grandChild3.setAttribute("class", "row");
  //asignamos clases e id al hijo
  child.setAttribute("class", "card col-1 w-100");
  child.setAttribute("id", "card" + index);

  /* let object = {
    palo: "",
    numero: ""
  }; */
  let palo = selectSuit(greatGrandSon1, greatGrandSon3); //asignamos palo a la carta

  let numero = selectValue(greatGrandSon2); //asinamos valor a la carta y se lo añadimos a un array
  // console.log(object);
  myArray.push({ palo: palo, numero: numero });
  /* for (let index = 0; index < myArray.length; index++) {
       console.log(myArray[index].palo);
        console.log(myArray[index].numero);
      
  } */

  //console.log(object);
  //   console.log(myArray);

  return child;
}

// FUNCION QUE GENERA CADA CARTA EN FUNCION DEL NUMERO DEL INPUT Y EL ARRAY CON LOS VALORES
function cardGenerator() {
  let myInput = document.querySelector("#myInput").value;
  let father = document.querySelector("#row2");
  father.textContent = ""; //vacia al padre si ya tiene algun contenido, para que no se sobreescriban cartas
  for (let numberOfCards = 1; numberOfCards <= myInput; numberOfCards++) {
    father.appendChild(createContent(numberOfCards));
  }
  for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index].palo);
    console.log(myArray[index].numero);
  }

  //aqui lo vaciamos para la siguiente vuelta (la siguiente vez que generes unas cartas)

  //myArray.splice(0, myArray.length);
}

function selectSortSuit(result, top, bot) {
  if (result == "hearts") {
    top.className = "hearts col-4 left-suit d-flex justify-content-center";
    bot.className =
      "hearts-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else if (result == "spades") {
    top.className = "spades col-4 left-suit d-flex justify-content-center";
    bot.className =
      "spades-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else if (result == "clubs") {
    top.className = "clubs col-4 left-suit d-flex justify-content-center";
    bot.className =
      "clubs-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  } else {
    top.className = "diamonds col-4 left-suit d-flex justify-content-center";
    bot.className =
      "diamonds-rotate col-4 offset-8 left-suit d-flex justify-content-center";
  }
  return result;
}
// FUNCION QUE GENERA VALUE
function selectSortValue(result, mid) {
  let resultOut = result;
  if (result == 1) {
    result = "A";
  } else if (result == 11) {
    result = "J";
  } else if (result == 12) {
    result = "Q";
  } else if (result == 13) {
    result = "K";
  }
  mid.innerHTML = result;
  return resultOut;
}

//Funcion que crea el contenido de las nuevas cartas
function createSortContent(content, index) {
  //creamos hijos
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
  //asignamos clases a bisnieto
  greatGrandSon2.setAttribute(
    "class",
    "value col-4 offset-4 d-flex justify-content-center"
  );
  //asignamos clases a los nietos
  grandChild1.setAttribute("class", "row");
  grandChild2.setAttribute("class", "row");
  grandChild3.setAttribute("class", "row");
  //asignamos clases e id al hijo
  child.setAttribute("class", "card col-1 w-100");
  child.setAttribute("id", "card" + index);

  // selectSuit(greatGrandSon1, greatGrandSon3); //asignamos palo a la carta
  selectSortSuit(content.palo, greatGrandSon1, greatGrandSon3);
  selectSortValue(content.numero, greatGrandSon2);

  //myArray.push(selectValue(greatGrandSon2)); //asinamos valor a la carta y se lo añadimos a un array
  //   console.log(myArray);

  return child;
}

//Funcion que pintara las bubble sorting
function cardBubbleGenerator(arr, numberCards) {
  console.log(arr.length, "aaaaaa");
  let father = document.querySelector("#row3");
  let index = 0;
  let child = document.createElement("div");

  let att = document.createAttribute("class"); // Create a "class" attribute
  att.value = "row"; // Set the value of the class attribute
  child.setAttributeNode(att);
  //father.textContent = ""; //vacia al padre si ya tiene algun contenido, para que no se sobreescriban cartas
  for (let numberOfCards = 1; numberOfCards <= numberCards; numberOfCards++) {
    child.appendChild(createSortContent(arr[index], numberOfCards));

    index++;
  }
  father.appendChild(child);
  father.textContent = ""; //vacia al padre si ya tiene algun contenido, para que no se sobreescriban cartas
}
function sort() {
  bubbleSort(myArray);
}
//Funcion que imprimira la bubble Sort
const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array

  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index].numero > arr[index + 1].numero) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }

      index++;
    }
    //Aqui es donde llamare a la funcion que pinte las cartas
    for (let index2 = 0; index2 < arr.length; index2++) {
      console.log(arr[index2].palo, "a");
      console.log(arr[index2].numero, "b");
      //console.log(arr.length);
    }
    cardBubbleGenerator(arr, arr.length);
    wall--; //decrease the wall for optimization
  }
};
