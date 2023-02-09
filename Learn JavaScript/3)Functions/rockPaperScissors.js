console.log('hi');

const getUserChoice = (userInput) =>{
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" ||userInput === "scissors" || userInput === "bomb"){
    return userInput;
  } else {
    return console.log("User Error: Input is Invalid");
  }
};

// getUserChoice("rocks");
// console.log(getUserChoice("Rock"));

function getComputerChoice () {
  (randomNumber = Math.floor(Math.random () *3));
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;  
  }
};

// console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice){
    return "The game was a tie";
  } else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper"){
    return "The user has won this game";
  } else if (computerChoice  === "rock" && userChoice === "scissors" || computerChoice  === "paper" && userChoice === "rock" || computerChoice  === "scissors" && userChoice === "paper"){
    return "The computer has won this game";
  }
};

// console.log(determineWinner(getUserChoice("rock"), getComputerChoice()));

// playGame("rock");
// playGame("Bomb");

function playGame(userInput){
  let userChoice = getUserChoice(userInput);
  if (userChoice === "bomb"){
    return console.log("The user has won with BOMB!");
  } else {
    console.log("The user has thrown "+ userChoice);
    let computerChoice = getComputerChoice();
    console.log("The computer has thrown " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    return determineWinner(userChoice, computerChoice);  
  }
};
