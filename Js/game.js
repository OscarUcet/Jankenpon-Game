/**
 * Value of selected options:
 * 0 = Rock
 * 1 = Paper
 * 2 = Scissors
 * @constructor
 * @param {number} selection - The value of option selected.
*/
export class Game {
    constructor(selection){
        this.setChoose(selection);
    }
    /**
     * Handle Selection
     * @param {number} selection - The value of option selected.
     * @returns {function ChangeScore(number) } change the current score.
    */
    setChoose(selection){
        let choiceBot = this.ChoiceBot();
        // juego empatado
        if (selection === choiceBot) {
            return console.warn('Tied Game, play Again!!.');
        }
        // piedra vs tijera
        else if (choiceBot === 0 && selection === 2) {
            console.error('You Lose!.');
            return this.ChangeCurrentScore(-1);
        }
        // papel vs piedra
        else if (choiceBot === 1 && selection === 0) {
            console.error('You Lose!.');
            return this.ChangeCurrentScore(-1);
        }
        //tijera vs papel
        else if (choiceBot === 2 && selection === 1) {
            console.error('You Lose!.');
            return this.ChangeCurrentScore(-1);
        } else {
            console.log('You Win!.');
            return this.ChangeCurrentScore(1);
        }
    }
    /**
     * @returns {number} The value option return random a 0 to 3.
    */
    ChoiceBot() {
        let choiceBot = parseInt(Math.random() * 3);
        switch (choiceBot) {
            case 0:
                console.log('bot elije roca: ', choiceBot);// elimitar luego de completar el ticket: "Show the result of the game"
                break;
            case 1:
                console.log('bot elije papel: ', choiceBot);// elimitar luego de completar el ticket: "Show the result of the game"
                break;
            case 2:
                console.log('bot elije tijera: ', choiceBot);// elimitar luego de completar el ticket: "Show the result of the game"
                break;
        }
        return choiceBot;
    }
    /**
     * @param {number} value - Receives a number that alters the current score.
    */
    ChangeCurrentScore(value) {
        const currentScore = document.getElementById('score-num');

        let score = parseInt(currentScore.innerText);
        score += value;
        currentScore.innerText = score;
        return score;
    }
}
