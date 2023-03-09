const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Starts the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro')
        const matchScreen = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };

    // Plays the match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = "";
            });
        });
        // Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    // Now we compare hands
                    compareHands(this.textContent, computerChoice);
                    // Update Images
                    playerHand.src = `./img/${this.textContent}.png`;
                    computerHand.src = `./img/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector('.winner')
        // Check for a potential tie
        if (playerChoice === computerChoice) {
            winner.textContent = "it's a tie !!!";
            return;
        }
        // Check for Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "The player wins !!!";
                pScore++
                updateScore();
                checkWinner();
                return;
            } else {
                winner.textContent = "The computer wins !!!";
                cScore++
                updateScore();
                checkWinner();
                return;
            }
        };
        // Check for Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = "The player wins !!!";
                pScore++
                updateScore();
                checkWinner();
                return;
            } else {
                winner.textContent = "The computer wins !!!";
                cScore++
                updateScore();
                checkWinner();
                return;
            }
        };
        // Else it's scissors
        if (computerChoice === 'paper') {
            winner.textContent = "The player wins !!!";
            pScore++
            updateScore();
            checkWinner();
            return;
        } else {
            winner.textContent = "The computer wins !!!";
            cScore++
            updateScore();
            checkWinner();
            return;
        }
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const checkWinner = () => {
        if (pScore === 1) {
            const result = document.querySelector('.intro h1');
            result.textContent = "Looks like you won this match, congratualions. Do you wish to play again ?"
            endGame();
        }
        if (cScore === 1) {
            const result = document.querySelector('.intro h1');
            result.textContent = "Looks like you lost this match, that's too bad.... Do you wish to play again ?"
            endGame();
        }
    }

    const endGame = () => {
        console.log('bite');
        const introScreen = document.querySelector('.intro')
        const matchScreen = document.querySelector('.match')
        introScreen.classList.remove('fadeOut');
        matchScreen.classList.remove('fadeIn');
        introScreen.classList.add('fadeIn');
        matchScreen.classList.add('fadeOut');
        game();
    }

    // Call all the inner function
    startGame();
    playMatch();
};

game();

