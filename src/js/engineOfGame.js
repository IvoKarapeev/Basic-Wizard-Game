
export function startGame(element) {
    element.className = "hidden";

    const wizard = makeWizard();
    const game = document.getElementsByClassName("game")[0];

    game.appendChild(wizard);
   
};


function makeWizard() {
    
    const wizardDiv = document.createElement("div");
    wizardDiv.className = "wizzard";

    return wizardDiv;
};
