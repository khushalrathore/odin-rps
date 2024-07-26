const choices = ['rock', 'paper', 'scissors'];
let rounds = 5;
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let h = prompt("Enter your move (r/p/s) : ").toLowerCase();
  choices.includes(h) && console.log("You :", h);
  return !choices.includes(h) ? getHumanChoice() : h;
}

function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  console.log("Computer :", choice);
  return choice;
}

function playRound() {
  const human = getHumanChoice();
  const computer = getComputerChoice();

  if (human === computer) {
    console.log("DRAW");
  } else if (
    (human === 'rock' && computer === 'paper') ||
    (human === 'paper' && computer === 'scissors') ||
    (human === 'scissors' && computer === 'rock')
  ) {
    computerScore++;
    console.log(`You lose! ${computer.toUpperCase()} beats ${human.toUpperCase()}.`);
  } else {
    humanScore++;
    console.log(`You win! ${human.toUpperCase()} beats ${computer.toUpperCase()}.`);
  }
}

while (rounds--) {
  playRound();
}

const finalShowDown = `Your Score: ${humanScore}\nComputer's Score: ${computerScore}`
const msg = `\n${humanScore == computerScore ? "DRAW" : humanScore > computerScore ? "You Win !!!" : "Computer Wins !!!"}`
console.log(`${finalShowDown}`, `${msg}`)
