import { Game } from './game.js';
//Buttons get id:
const rock = document.getElementById('container-rock');
const paper = document.getElementById('container-paper');
const scissors = document.getElementById('container-scissors');
// Modal get id
const modal = document.getElementById("myModal");
const rules = document.getElementById("myBtn");
const close = document.getElementById("icon-close");
//
const game = new Game();
// button rock
rock.addEventListener('click', ()=> {
    console.log('My Choose: Rock #0')
    game.changeForOptionSelected(0);
});
// button paper
paper.addEventListener('click', ()=> {
    console.log('My Choose: Paper #1')
    game.changeForOptionSelected(1);
});
// button scissors
scissors.addEventListener('click', ()=> {
    console.log('My Choose: Scissors #2')
    game.changeForOptionSelected(2);
});
// button modal rules
rules.addEventListener('click', ()=> {
    modal.style.display = "block";
});
// close the modal rules
close.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks outside, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}