    humanScore = 0;
    computerScore = 0;
    roundNum = 1;

    const buttons = document.querySelectorAll(".rps-button");
    const resetButton = document.querySelector("#reset-btn")
    const winText = document.querySelector("#win-text");
    const myScore = document.querySelector("#score");
    const compScore = document.querySelector("#comp-score")
    const compChoice = document.querySelector("#comp-choice")
    const round = document.querySelector("#round")

    function getComputerChoice() {
        const rock = "rock";
        const paper = "paper";
        const scissors = "scissors";
        const choices = [rock, paper, scissors];
        const randomIndex = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomIndex];
        // console.log("Computer choice:", computerChoice);
        return computerChoice;
    }

    // function getHumanChoice() {
    //     const humanChoice = prompt("Enter rock, paper or scissors:");
    //     console.log("You chose:", humanChoice);
    //     return humanChoice.toLowerCase();
    //}

    function playRound(humanChoice, computerChoice) {
        
        roundNum++;

        if (humanChoice === computerChoice) {
            alert("It's a tie")
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                    (humanChoice === "paper" && computerChoice === "rock") ||
                    (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            // console.log("You win this round!");
        } else {
            computerScore++;
            // console.log("Computer wins this round!");
        }
        // console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);

        myScore.textContent = `Your score = ${humanScore}`;
        compScore.textContent = `Computer score = ${computerScore}`;
        round.textContent = `Round ${roundNum}`;
        compChoice.textContent = `Computer choice: ${computerChoice}`;

        checkForWinner(humanScore, computerScore);
    }    
    
    function checkForWinner(humanScore, computerScore) {
        

        if (humanScore === 5) {
            winText.textContent = "Congratulations! You are the winner!";
            winText.classList.add('player-win')
            resetButton.style.visibility = 'visible';
        }

        if (computerScore === 5) {
            winText.textContent = "You lose!";
            winText.classList.add('comp-win')
            resetButton.style.visibility = 'visible';
        }
    }
    
    function playGame() {
        resetButton.style.visibility = 'hidden';

        buttons.forEach((button) => {
            button.addEventListener(("click"), () => {
                if(humanScore != 5 && computerScore != 5) {
                    playRound(button.id, getComputerChoice());
                }
            });
        });
    }

    function resetGame() {
        resetButton.addEventListener(("click"), () => {
            console.log("called")
            roundNum = 1;
            humanScore = 0;
            computerScore = 0;
            myScore.textContent = `Your score = ${humanScore}`;
            compScore.textContent = `Computer score = ${computerScore}`;
            round.textContent = `Round ${roundNum}`;
            winText.textContent = "";
            winText.classList.remove('player-win');
            winText.classList.remove('comp-win')
            resetButton.style.visibility = 'hidden'
        });
    }
    
    playGame();
    resetGame();
