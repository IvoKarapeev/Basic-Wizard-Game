export function startGame(element) {
    element.remove();

    const wizard = makeWizard();
    const game = document.getElementsByClassName("game")[0];

    const wizardPosition = {
        startX:200,
        startY:300
        
    };

    wizard.style.left = wizardPosition.startX + "px";
    wizard.style.top = wizardPosition.startY + "px";

    game.appendChild(wizard);
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
    
};


function makeWizard() {
    
    const wizardDiv = document.createElement("div");
    wizardDiv.className = "wizzard";

    return wizardDiv;
};
