import { startGame } from "./engineOfGame.js";

const availableKeys = [
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
    'Space'
];

const keys = {
    KeyA: false,
    KeyS: false,
    KeyD: false,
    KeyW: false,
    Space: false,
}

const startElement = document.getElementById("pressToStart");


startElement.addEventListener("click",() => startGame(startElement));


document.addEventListener("keydown", (ev) => {
    
    if (availableKeys.includes(ev.code)) {
        keys[ev.code] = true;
        console.log(keys);
    }

});

document.addEventListener('keyup', (e) => {
    if (availableKeys.includes(e.code)) {
        keys[e.code] = false;
        console.log(keys);
    }
});