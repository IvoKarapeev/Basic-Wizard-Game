export function startGame(element) {
    element.remove();

    const wizard = makeWizard();
    const ghost = makeGhost();
    const game = document.getElementsByClassName("game")[0];

    const wizardPosition = {
        startX:200,
        startY:300,
        posX: 200,
        posY: 300,
        speed:10
    };

    wizard.style.left = wizardPosition.startX + "px";
    wizard.style.top = wizardPosition.startY + "px";

    
    game.appendChild(wizard);
    game.appendChild(ghost);
    
    ghost.style.left = game.offsetWidth - ghost.offsetWidth + "px";
    ghost.style.top = Math.floor(Math.random() * game.offsetHeight - ghost.offsetHeight) + "px";
    //start game

        
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
        
    document.addEventListener("keydown", (ev) => {
        
        if (availableKeys.includes(ev.code)) {
            keys[ev.code] = true;;
            if (ev.code === "KeyD") {
                wizardPosition.posX = Math.min(wizardPosition.posX + wizardPosition.speed , game.offsetWidth - wizard.offsetWidth);
                wizard.style.left = wizardPosition.posX + "px";
            };

            if (ev.code === "KeyW") {
                wizardPosition.posY = Math.max(wizardPosition.posY - wizardPosition.speed , 0);
                wizard.style.top = wizardPosition.posY + "px";
            };

            if (ev.code === "KeyA") {
                wizardPosition.posX = Math.max(wizardPosition.posX - wizardPosition.speed , 0);;
                wizard.style.left = wizardPosition.posX + "px";
            };

            if (ev.code === "KeyS") {
                wizardPosition.posY = Math.min(wizardPosition.posY + wizardPosition.speed , game.offsetHeight - wizard.offsetHeight);
                wizard.style.top = wizardPosition.posY + "px";
            };


        };

        

    });

    
};


function makeWizard() {
    
    const wizardDiv = document.createElement("div");
    wizardDiv.className = "wizzard";

    return wizardDiv;
};

function makeGhost() {
    
    const ghostDiv = document.createElement("div");
    ghostDiv.className = "ghost";

    return ghostDiv;

}