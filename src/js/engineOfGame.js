export function startGame(element) {
    element.remove();

    const wizard = makeWizard();
    const game = document.getElementsByClassName("game")[0];
    let gameOver = false;

    const wizardPosition = {
        startX:200,
        startY:300,
        posX: 200,
        posY: 300,
        speed:20
    };

    wizard.style.left = wizardPosition.startX + "px";
    wizard.style.top = wizardPosition.startY + "px";

    
    game.appendChild(wizard);


    
    function spawnGhost() {
        
        const ghost = makeGhost();
        game.appendChild(ghost);
        
        ghost.style.left = game.offsetWidth - ghost.offsetWidth + "px";
        ghost.style.top = Math.floor(Math.random() * (game.offsetHeight - ghost.offsetHeight)) + "px";

        if (gameOver !== false) {
            
        }

    }
    
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
    };


    const ghostObject = {
        speed : 30
    };
        
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

            if (ev.code === "Space") {
                const fireBall = makeFireball(wizardPosition,game,wizard);

                console.log("Space");
            };

        };

        

    });

    //Make Ghost Movement
    setTimeout(function moveGhosts() {
        if (gameOver === false) {
        
         ghostMovement();
         setTimeout(moveGhosts, 100);
        }else{
            
        }
     }, 3000);


    //Spawn ghost on random places
    setTimeout(function randomGhostSpawn() {
        if (gameOver === false) {
        
         spawnGhost();
 
         setTimeout(randomGhostSpawn, 1500);
        }else{
            
        }
     }, 3000);
  
    function ghostMovement() {

        document.querySelectorAll('.ghost').forEach(ghost => {
           
            let posX = parseInt(ghost.style.left);
            if (posX > 0) {

                ghost.style.left = posX - ghostObject.speed + 'px';                
            } else {
                ghost.remove();
            }
    
            
        
           });

    }

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

};

function makeFireball(wizardPossitions,gameScreen,wizard) {
    
    const fireballElement = document.createElement("div");
    fireballElement.className = "fireball";

    //position fireball


    fireballElement.style.left = wizardPossitions.posX + wizard.offsetWidth + "px";
    fireballElement.style.top = wizardPossitions.posY + wizard.offsetHeight / 4.7 + "px";


    // console.log(wizard,gameScreen,fireballElement);
    // console.log(wizard.offsetHeight);
    //append on screen
    gameScreen.appendChild(fireballElement);

}   