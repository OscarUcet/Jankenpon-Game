import { Game } from './game.js';

const rock = document.getElementById('container-rock');
const paper = document.getElementById('container-paper');
const scissors = document.getElementById('container-scissors');
const rules = document.getElementById('rules');

const game = new Game(0);
// button rock
rock.addEventListener('click', ()=> {
    console.log('My Choose: Rock #0')
    // const game = new Game(0);
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
    const message = 'Rules Coming Soon..';
    console.log(message);
});