import { endOfGame } from "./gameOver.js";

export function startGame(element) {
    element.remove();

    const wizard = makeWizard();
    const game = document.getElementsByClassName("game")[0];
    let gameOver = false;
    let score = 0;
    let scoreElement = document.getElementsByClassName("score")[0];
    
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
        speed : 20
    };

    const fireballObj = {
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
                makeFireball(wizardPosition,game,wizard);    
            };

        };

        

    });

    //score
    setTimeout(function scoreFunction() {
        if (gameOver === false) {
        
         score++;
         scoreElement.innerHTML = `${score} pts.`
         setTimeout(scoreFunction, 500);
        }
     }, 100);

    //Make Ghost Movement
    setTimeout(function moveGhosts() {
        if (gameOver === false) {
        
         ghostMovement();
         setTimeout(moveGhosts, 50);
        }else{
            
        }
     }, 3000);

    //Spawn ghost on random places
    setTimeout(function randomGhostSpawn() {
        isGameOver();
        if (gameOver === false) {
        
         spawnGhost();
 
         setTimeout(randomGhostSpawn, 1500);
        }else{
            
        }
     }, 3000);

    //Make Fireball Movement
    setTimeout(function moveFireball() {
    if (gameOver === false) {
    
        fireBallMovement();
        setTimeout(moveFireball, 50);
    }else{
        
    }
    }, 100);
  
    function ghostMovement() {

        document.querySelectorAll('.ghost').forEach(ghost => {
            let posX = parseInt(ghost.style.left);

            if (detectCollision(wizard,ghost)) {
                gameOver = true;
            } 
            
            if (posX > 0) {

                ghost.style.left = posX - ghostObject.speed + 'px';                
            } else {
                ghost.remove();
            }
    
            
        
           });

    };

    function fireBallMovement() {
        
        
        document.querySelectorAll('.fireball').forEach(fireball => {
           
            let posX = parseInt(fireball.style.left);

            // console.log(posX);
            document.querySelectorAll('.ghost').forEach(ghost => {
                if (detectCollision(fireball,ghost)) {
                    ghost.remove();
                    fireball.remove();
                    score += 100;
                }

            });

            if(posX > game.offsetWidth){
                fireball.remove();
            }else{
                fireball.style.left = posX + fireballObj.speed + 'px';                
            }

        });

    };

    function isGameOver() {
        
        if (gameOver) {
            let lastChild = game.lastElementChild; 
            while (lastChild) {
                lastChild.remove();
                lastChild = game.lastElementChild; 
            };

            endOfGame(score);
        }

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

    fireballElement.style.left = wizardPossitions.posX + wizard.offsetWidth + "px";
    fireballElement.style.top = wizardPossitions.posY + wizard.offsetHeight / 4.7 + "px";

    gameScreen.appendChild(fireballElement);

};

function detectCollision(elementA,elementB) {
 
    let first = elementA.getBoundingClientRect();
    let second = elementB.getBoundingClientRect();

    let itHasCollision = !(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right) 

    return itHasCollision;
}