game();

function game(){
    const buttons = document.querySelectorAll('button');
    const body = document.querySelector('body');
    const div = document.createElement('div');
    const divStand = document.createElement('div');
    const divWinner = document.createElement('div');
    let playerWins = 0;
    let computerWins = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const computerSelection = computerPlay();
            const playerSelection = button.textContent;
            divWinner.textContent = ""
            body.appendChild(divWinner);
            console.log("You play: " + playerSelection.toLowerCase() + ".")
            console.log("Computer plays: " + computerSelection.toLowerCase() + ".")
            outcome = playRound(playerSelection,computerSelection);
            if (outcome == "win"){
                div.textContent = "You win! " + playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection.toLowerCase() + "."
                playerWins++;
            }
            else if (outcome == "lose"){
                div.textContent = "You lose! " + playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase() + " does not beat " + computerSelection.toLowerCase() + "."
                computerWins++;
            }
            else if (outcome == "draw"){
                div.textContent = "Nobody wins! " + playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase() + " does not beat " + computerSelection.toLowerCase() + " or vice versa. Please play this round again."
            }
            divStand.textContent = "You won " + playerWins + " times, while the computer won " + computerWins + " times."
            body.appendChild(div);
            body.appendChild(divStand);
            if (playerWins === 5) {
                divWinner.textContent = "You win! Click on a button to start again."
                body.appendChild(divWinner);
                playerWins = 0;
                computerWins = 0;
            }
            else if (computerWins === 5) {
                divWinner.textContent = "You lose! Click on a button to start again."
                body.appendChild(divWinner);
                playerWins = 0;
                computerWins = 0;
            }   
        });
    });
    

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