function getComputerChoice() {
    let rnd = Math.floor(Math.random() * 3);
    if (rnd === 0) return "Rock";
    else if (rnd === 1) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK") {
        if (computerSelection === "Paper") {
            console.log("You Lose! Paper beats Rock")
            return 0;
        } else if (computerSelection === "Scissors") {
            console.log("You Win! Rock beats Scissors")
            return 2;
        } else {
            console.log("Its a Draw!")
            return 1;
        }
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "Paper"){
            console.log("Its a Draw!");
            return 1;
        } else if (computerSelection === "Scissors") {
            console.log("You Lose! Scissors beats Paper");
            return 0;
            
        } else {
            console.log("You Win! Paper beats Rock");
            return 2;
        }
    }
    else {
        if (computerSelection === "Paper") {
            console.log("You Win! Scissors beats Paper");
            return 2;
        } else if (computerSelection === "Scissors") {
            console.log("Its a Draw!");
            return 1;
        } else {
            console.log("You Lose! Rock beats Scissors")
            return 0;
        }
    }
}

function game() {
    let playercount = 0;
    computercount = 0;
    result = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Let's start a new round, what hand do you want to play ? ");
        let player = playerSelection.toUpperCase();
        if (player !== "ROCK" && player !== "SCISSORS" && player !== "PAPER") {
            console.log("Bad kitty");
            return;
        }
        let computer = getComputerChoice();
        result = playRound(player, computer);
        playercount += result;
        computercount += 2 - result;
    }
    while (playercount === computercount) {
        let playerSelection = prompt("I see you are still tied huh. Let's start a new round, what hand do you want to play ? ");
        let player = playerSelection.toUpperCase();
        if (player !== "ROCK" && player !== "SCISSORS" && player !== "PAPER") {
            console.log("Bad kitty");
            return;
        }
        let computer = getComputerChoice();
        result = playRound(player, computer);
        playercount = playercount + result;
        computercount = computercount + 2 - result;
    }
    console.log(playercount);
    console.log(computercount);
    if (playercount > computercount) console.log("You won! I see the computer don't got nothing on you huh.")
    else console.log("You lost... Better luck next time ^^.")
}