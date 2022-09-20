/**
 * Value of selected options:
 * 0 = Rock
 * 1 = Paper
 * 2 = Scissors
 * @constructor
 * @param {number} selection - The value of option selected.
*/
export class Game {
    constructor(){}
    /**
     * Handle Selection
     * @param {number} selection - The value of option selected.
     * @returns {function ChangeScore(number) } change the current score.
    */
    setChoose(selection){
        let choiceBot = this.ChoiceBot();
        let bttnAgain = document.createElement('div');
        bttnAgain.className = 'play-again';
        bttnAgain.id = 'play-again';
        bttnAgain.innerText = 'Play Again!';
        let message = document.createElement('h1');
        message.className = 'message'
        const mainPage = document.getElementById('mainSection');
        // juego empatado
        if (selection === choiceBot) {
            message.innerText = 'Tied Game, play Again!!.';       
            return mainPage.append(message, bttnAgain);
        }
        // piedra vs tijera
        else if (choiceBot === 0 && selection === 2) {
            message.innerText = 'You Lose!.';
            mainPage.append(message, bttnAgain);
            return this.ChangeCurrentScore(-1);
        }
        // papel vs piedra
        else if (choiceBot === 1 && selection === 0) {
            message.innerText = 'You Lose!.';
            mainPage.append(message, bttnAgain);
            return this.ChangeCurrentScore(-1);
        }
        //tijera vs papel
        else if (choiceBot === 2 && selection === 1) {
            message.innerText = 'You Lose!.';
            mainPage.append(message, bttnAgain);
            return this.ChangeCurrentScore(-1);
        } else {
            message.innerText = 'You Win!.';
            mainPage.append(message, bttnAgain);
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
                this.botChoice(0);
            break;
            case 1:
                this.botChoice(1);
            break;
            case 2:
                this.botChoice(2);
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
        this.setCurrentScore(score);
        return score;
    }
    setCurrentScore(score) {
        localStorage.setItem("Score", score);
    }
    getCurrentScore() {
        let score = localStorage.getItem("Score");
        if (isNaN(score)){
            return score = 0;
        } else {
            document.getElementById('score-num').innerHTML = score;
        }
    }
    changeForOptionSelected(option) {
        const mainPage = document.getElementById('mainSection');

        if (option === 0){
            mainPage.innerHTML = '';
            const quizEndHtml = `
                <article class="player-choice">
                    <p>Your Choice: </p>
                        <article class="container-rock-active">
                            <div class="circle-rock-active">
                                <div class="circle-before-rock-active">
                                    <img draggable="false" class="icon-rock-active" src="/images/icon-rock.svg">
                                </div>
                            </div>
                        </article>
                </article>
                <article class="bot-choice" id="bot-choice">
                </article>
            `;
            mainPage.innerHTML = quizEndHtml;
            this.setChoose(0);
        }
        if (option === 1){
            mainPage.innerHTML = '';
            const quizEndHtml = `
                <article class="player-choice">
                    <p>Your Choice: </p>
                    <article class="container-paper-active">
                        <div class="circle-paper-active">
                            <div class="circle-before-paper-active">
                                <img draggable="false" class="icon-paper-active" src="/images/icon-paper.svg">
                            </div>
                        </div>
                    </article>
                </article>
                <article class="bot-choice" id="bot-choice">
                </article>
            `;
            mainPage.innerHTML = quizEndHtml;
            this.setChoose(1);
        }
        if (option === 2){
            mainPage.innerHTML = '';
            const quizEndHtml = `
                <article class="player-choice">
                    <p>Your Choice: </p>
                    <article class="container-scissors-active">
                        <div class="circle-scissors-active">
                            <div class="circle-before-scissors-active">
                                <img draggable="false" class="icon-scissors-active" src="/images/icon-scissors.svg">
                            </div>
                        </div>
                    </article>
                </article>
                <article class="bot-choice" id="bot-choice">
                </article>
            `;
            mainPage.innerHTML = quizEndHtml;
            this.setChoose(2);
        }
    }    
    botChoice(option) {
        const addChoice = document.getElementById('bot-choice');
        addChoice.innerHTML = '';

        if (option === 0){
            const quizEndHtml = `
                <p>Bot Choice: </p>
                <article class="container-rock-active">
                    <div class="circle-rock-active">
                        <div class="circle-before-rock-active">
                            <img draggable="false" class="icon-rock-active" src="/images/icon-rock.svg">
                        </div>
                    </div>
                </article>
            `;
            addChoice.innerHTML = quizEndHtml;
        }
        if (option === 1){
            const quizEndHtml = `
                <p>Bot Choice: </p>
                <article class="container-paper-active">
                    <div class="circle-paper-active">
                        <div class="circle-before-paper-active">
                            <img draggable="false" class="icon-paper-active" src="/images/icon-paper.svg">
                        </div>
                    </div>
                </article>
            `;
            addChoice.innerHTML = quizEndHtml;
        }
        if (option === 2){
            const quizEndHtml = `
                <p>Bot Choice: </p>
                <article class="container-scissors-active">
                    <div class="circle-scissors-active">
                        <div class="circle-before-scissors-active">
                            <img draggable="false" class="icon-scissors-active" src="/images/icon-scissors.svg">
                        </div>
                    </div>
                </article>
            `;
            addChoice.innerHTML = quizEndHtml;
        }
    }
}
