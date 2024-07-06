const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
    console.log(humanChoice);
    playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    console.log("Humano: " + human + " Maquina: " + machine);

    if (human === machine) {
        result.innerHTML = "Deu empate :|";
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper') ||
        (human === 'rock' && machine === 'lizard') ||
        (human === 'lizard' && machine === 'spock') ||
        (human === 'spock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'lizard') ||
        (human === 'lizard' && machine === 'paper') ||
        (human === 'paper' && machine === 'spock') ||
        (human === 'spock' && machine === 'rock')
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você ganhou ;)";
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Você perdeu para Sheldon :(";
    }
};
