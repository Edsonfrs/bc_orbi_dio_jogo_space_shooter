const yourShip = document.querySelector('.player-shooter');
const playerarea = document.querySelector('#main-play-area');

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

// Criando a função de ascender a nave
function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');

    if(topPosition === "0px") {
        return;
    } else {
        let position = parseInt(topPosition);
    }
}