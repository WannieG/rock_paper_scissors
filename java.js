game();

function game(){
    //declare playerSelection & computerSelection variables
    let outcome;
    let playerWins = 0;
    let computerWins = 0;
    let i = 1;
    while (i <= 5){
        let playerSelection = prompt("Pick one: 'Rock', 'Paper' or 'Scissors'");
        console.log("Round " + i + ":")
        console.log("You play: " + playerSelection.toLowerCase() + ".")
        const computerSelection = computerPlay();
        console.log("Computer plays: " + computerSelection.toLowerCase() + ".")
        outcome = playRound(playerSelection, computerSelection);
        if (outcome == "win"){
            console.log("You win! " + playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection.toLowerCase() + ".")
            playerWins++;
        }
        else if (outcome == "lose"){
            console.log("You lose! " + computerSelection.slice(0,1).toUpperCase() + computerSelection.slice(1).toLowerCase() + " does not beat " + playerSelection.toLowerCase() + ".")
            computerWins++;
        }
        else if (outcome == "draw"){
            console.log("Nobody wins! " + playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase() + " does not beat " + computerSelection.toLowerCase() + " or vice versa. Please play this round again.")
            i--;
        }
        i++;
    }
    console.log("You won " + playerWins + " times.")
    console.log("Computer won " + computerWins + " times.")
    if(playerWins > computerWins){
        console.log("You won!")
    }
    else console.log("You lose!")
}
        

function computerPlay(){
    //generate a random number between 1 and 3
    let randomNumber = Math.floor(Math.random()*3) + 1;
    //if function depending on the random number which outputs the computer move
    if (randomNumber == 1) {
        computerSelection = "Rock";
    }
    else if (randomNumber == 2) {
        computerSelection = "Paper";
    }
    else computerSelection = "Scissors";
    return computerSelection
}

function playRound(playerSelection, computerSelection){
    //based on the choice of play of both player and computer, pick a winner for the current round
    if(playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper"){
        return "win"
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock"){
        return "lose"
    }
    else return "draw"
}

