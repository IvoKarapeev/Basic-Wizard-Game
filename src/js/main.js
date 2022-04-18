import { startGame } from "./engineOfGame.js";

const startElement = document.getElementById("pressToStart");

startElement.addEventListener("click",() => startGame(startElement));

