import { Game } from './game.js';
//Buttons get id:
const rock = document.getElementById('container-rock');
const paper = document.getElementById('container-paper');
const scissors = document.getElementById('container-scissors');
// Modal get id
const modal = document.getElementById("myModal");
const rules = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
//
const game = new Game(0);
// button rock
rock.addEventListener('click', ()=> {
    console.log('My Choose: Rock #0')
    game.setChoose(0);
});
// button paper
paper.addEventListener('click', ()=> {
    console.log('My Choose: Paper #1')
    game.setChoose(1);
});
// button scissors
scissors.addEventListener('click', ()=> {
    console.log('My Choose: Scissors #2')
    game.setChoose(2);
});
// button rules
rules.addEventListener('click', ()=> {
    modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks outside, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}