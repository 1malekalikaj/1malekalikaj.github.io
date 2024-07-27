const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const outcomeElement = document.getElementById('outcome');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  playerChoiceElement.textContent = playerChoice;
  computerChoiceElement.textContent = computerChoice;
  
  if (playerChoice === computerChoice) {
    outcomeElement.textContent = "It's a Draw!";
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    outcomeElement.textContent = 'YOU WIN!';
    playerScore++;
  } else {
    outcomeElement.textContent = 'YOU LOSE!';
    computerScore++;
  }
  
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}