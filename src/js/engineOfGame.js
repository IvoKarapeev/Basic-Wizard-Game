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
    
   
};


function makeWizard() {
    
    const wizardDiv = document.createElement("div");
    wizardDiv.className = "wizzard";

    return wizardDiv;
};
