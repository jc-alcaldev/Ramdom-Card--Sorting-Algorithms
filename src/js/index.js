/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
import "./randomCard.js";

const myInput = document.querySelector("#myButton").value;
const drawnButton = document.querySelector("#drawnButton");
//const bubbleButton = document.querySelector("#bubbleButton");

drawnButton.addEventListener("click", function() {
  cardsGenerator();
});

function cardsGenerator() {
  var allCards = [];
  let card = createCard();

  for (let numberCards = 1; numberCards <= myInput; numberCards++) {
    //Crea el numero de cartas que hemos introducido
    allCards.push(card);
  }

  for (let index = 0; index < array.length; index++) {
    //Anade las cartas a la row
  }
}

function createCard() {
  let father = document.createElement("#row2");
  let child = document.createElement("#div");
  let grandChild1 = document.createElement("#div");
  let grandChild2 = document.createElement("#div");
  let grandChild3 = document.createElement("#div");
  let greatGrandson1 = document.createElement("#div");
  let greatGrandson2 = document.createElement("#div");
  let greatGrandson3 = document.createElement("#div");

  grandChild1.appendChild(greatGrandson1);
  grandChild2.appendChild(greatGrandson2);
  grandChild3.appendChild(greatGrandson3);
  child.appendChild(grandChild1);
  child.appendChild(grandChild2);
  child.appendChild(grandChild3);
  father.appendChild(child);
  greatGrandson2.className(
    "value col-4 offset-4 d-flex justify-content-center"
  ); //Le asignamos al bisnieto una class y un value de CSS
  greatGrandson2.setAttribute("id", "value"); //Le ponemos un id a los 3 bisnietos para que se comuniquen con el randomCard.js
  greatGrandson2.setAttribute("id", "left-suit");
  greatGrandson2.setAttribute("id", "rigth-suit");
  grandChild1.className("row"); //Asignamos un class a los nietos
  grandChild2.className("row");
  grandChild3.className("row");
  child.className("card border w-25");
  child.setAttribute("id", "card");

  return;
}
