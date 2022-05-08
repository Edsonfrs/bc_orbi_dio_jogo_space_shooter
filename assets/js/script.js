const yourShip = document.querySelector('.player-shooter');
const playerArea = document.querySelector('#main-play-area');
const aliensImg = ['/assets/img/monster-1.png','/assets/img/monster-2.png', '/assets/img/monster-3.png']

// Movimentação do herói e disparo do laser ;-)
function flyShip(event)  {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if (event.key === " ") {
        event.preventDefault();
        firelaser();
    }
}

// Criando a função para ascensão da nave
function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');

    if(topPosition === "0px") {
        return;
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;
    }
}

// Criando a função para descensão da nave
function moveDown()  {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');

    if(topPosition === "500px") {
        return;
    } else {
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = `${position}px`;
    }
}

// Disparando nos invasores...  

function firelaser() {
    let laser = createLaserElement();
     playerArea.appendChild(laser);
     moveLaser(laser);
}

function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = 'assets/img/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition}px`;
    newLaser.style.top = `${yPosition-10}px`;
    return newLaser;

}

function moveLaser(laser) {
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(laser.style.left);

        if (xPosition === 500) {
            laser.remove();
        } else {
            laser.style.left = `${xPosition + 8}px`;
        }
    }, 10);
}



window.addEventListener('keydown', flyShip);
