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

