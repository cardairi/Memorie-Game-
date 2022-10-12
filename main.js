import { emojiFoods } from './emoji-foods.js';
import { shuffleArray } from './utils/shuffleArray.js';

window.addEventListener('load', function(){
/* ------------- We obtain the global variables or selectors --------------- */
const startBtn = document.querySelector('.start-btn');
const template = document.querySelector('#template-card');
const board = document.querySelector('.board');
const fragment = document.createDocumentFragment()


/* -------------------------------------------------------------------------- */
/*      PARTE I :
        -Empezar el juego cuando el usuario haga click en el botón start-btn
        -Crear las cards con los emojis usando el template #template-card     
/* -------------------------------------------------------------------------- */

startBtn.addEventListener('click', initGame);

//Tha idea of this function is when the user click on the StartGame btn, the cards appear
//Here we're going through the array of emojiFoods with a forEach

function initGame(){
    board.innerHTML = "";
    createBoard();
}

//Creating a function to create de board
function createBoard() {
    emojiFoods.forEach((emoji) => {
    const card = createCard(emoji);
    fragment.append(card);
    });


    board.append(fragment) 
}

function createCard({id, emoji}) {
    const card = template.content.cloneNode(true);
    card.querySelector('.card').dataset.identity = id;
    card.querySelector('.card__back').textContent = emoji;
    return card
}

/* -------------------------------------------------------------------------- */
/*      PARTE II :
        -Empezar el juego cuando el usuario haga click en el botón start-btn
        -Crear las cards con los emojis usando el template #template-card     
/* -------------------------------------------------------------------------- */













/* -------------------------------------------------------------------------- */
/*            Starting the game when the user click on the btn .start-btn     */
/* -------------------------------------------------------------------------- */

    // INDICACIONES:
/**
 *
 * Empezar el juego cuando el usuario haga click en el botón
 * .start-btn
 *
 * Crear las cards con los emojis usando el template
 * #template-card
 *
 * Cada board generado debe ser aleatorio y tiene que estar barajado con un máximo de 16 cards 4x4
 * shuffleArray
 *
 * Añadir clase flipped a las cards cuando el usuario haga click
 * .board (delegación de eventos)
 *
 * Comprobar si las dos cartas son iguales y añadir clase match
 * .match
 *
 * Sumar un punto si son iguales y restar un punto si no lo son
 * Actualizar el contador de puntos
 * .score-board__item-score
 *
 * Iniciar el temporizador cuando se empieza el juego
 * Actualizar el contador de segundos
 * .score-board__item-time
 *
 * Mostrar el mensaje de fin de juego cuando hagan match todas las cards
 * .finish-display
 *
 * Cuando el usuario quiera volver a jugar: ocultar mensaje fin de juego, resetear contador de puntos, segundos y board
 *
 *
 * ⭐BONUS⭐: Compartir en redes sociales que has terminado el proyecto
 * Haz ctrl + click en este link para compartir en Twitter:
 * https://twitter.com/intent/tweet?url=https%3A%2F%2Fnaviscode.gumroad.com%2Fl%2Ffrontend-fastlane-plan&text=Completado%20el%20proyecto%20del%20curso%20del%20DOM%20del%20Frontend%20Fastlane%20Plan%20de%20%40NavisCode%0A%0A%F0%9F%9A%80%20A%20por%20el%20siguiente%20reto%21%0A%0A
 *
 */


















    
})
