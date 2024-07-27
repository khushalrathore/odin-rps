const body = document.body;
const head = document.head;
const style = document.createElement("style");
head.appendChild(style);
const styles = `
  body { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    min-height: 100dvh; 
    font-family: system-ui;  
    margin: 0; 
    padding: 0;

  }
  .main {
    color: black;
    display: flex;
    gap: 1rem;   
    flex-direction:column; 
    justify-content:center;
    align-items:center;
    margin: 0; 
    padding: 0;
    font-size:2rem;
    text-transform:capitalize;
    font-weight:900;
    border:5px solid black;
    border-radius:10px;
    padding:0;
    margin:1.5rem;
  }
  .heading{
  margin:0;
  padding:0;
  margin:1rem;
  margin-bottom:0;
  }
  .choicesDiv{
    display:flex;
    gap:1rem;
    flex-direction:row;
    justify-content : center;
     margin:1rem;
  margin-block:0;
  }
  .choice1,.choice2,.choice3 {
    color: white;
    background: linear-gradient(120deg,black,gray);
    position:relative;
    border: none;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-transform: capitalize;
    cursor: pointer;
    display: flex;
    justify-content: center; 
    align-items: center; 
    font-size: 3rem; 
    margin: 0; 
    padding: 0;
    z-index:0;
  }
  .choice1::before, .choice2::before, .choice3::before {
    position:absolute;
    inset:0;
    content:'';
    background:black;
    opacity:0.2;
    z-index:-1;
    border-radius: 50%;
  }
  .scoreboard{
    display:flex;
    padding:1rem;
    min-width:100%;
    box-sizing:border-box;

  }
  span {
    text-align: start;
    font-family: system-ui;
    font-size:16px;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:start;

  }
`;

head.querySelector("style").innerHTML = styles;

function createThis(parentName, tagName, className, content) {
  const parentElement = document.querySelector(parentName);
  const element = document.createElement(tagName);
  element.setAttribute("class", className);
  element.innerHTML = content;
  parentElement.appendChild(element);
}

createThis("body", "div", "main", `<p class="heading">Pick your move</p>`);
createThis("div.main", "div", "choicesDiv", "");
createThis("div.choicesDiv", "button", "choice1", "✊");
createThis("div.choicesDiv", "button", "choice2", "✋");
createThis("div.choicesDiv", "button", "choice3", "✌️");
createThis("div.main", "div", "scoreboard", `<span>Your Score: 0<br>Computer's Score: 0</span>`);

const rock = document.body.querySelector("button.choice1");
const paper = document.body.querySelector("button.choice2");
const scissors = document.body.querySelector("button.choice3");
const scoreboard = document.body.querySelector(".scoreboard");

let humanScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScoreboard(result) {
  scoreboard.innerHTML = `
  <span>
  Your Score: ${humanScore}<br>
  Computer's Score: ${computerScore}<br>
  ${result}`;
}

function playRound(human) {
  const computer = getComputerChoice();
  if (human === computer) {
    updateScoreboard("DRAW");
  } else if (
    (human === 'rock' && computer === 'paper') ||
    (human === 'paper' && computer === 'scissors') ||
    (human === 'scissors' && computer === 'rock')
  ) {
    computerScore++;
    updateScoreboard(`<span>You lose! ${computer.toUpperCase()} beats ${human.toUpperCase()}.</span>`);
  } else {
    humanScore++;
    updateScoreboard(`<span>You win! ${human.toUpperCase()} beats ${computer.toUpperCase()}.</span>`);
  }
}

rock.onclick = () => playRound('rock');
paper.onclick = () => playRound('paper');
scissors.onclick = () => playRound('scissors');
