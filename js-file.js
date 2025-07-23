    console.log("Hello, World!");

    humanScore = 0;
    computerScore = 0;

    function getComputerChoice() {
        const rock = "rock";
        const paper = "paper";
        const scissors = "scissors";
        const choices = [rock, paper, scissors];
        const randomIndex = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomIndex];
        console.log("Computer choice:", computerChoice);
        return computerChoice;
    }

    // function getHumanChoice() {
    //     const humanChoice = prompt("Enter rock, paper or scissors:");
    //     console.log("You chose:", humanChoice);
    //     return humanChoice.toLowerCase();
    //}

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("You win this round!");
        } else {
            computerScore++;
            console.log("Computer wins this round!");
        }
        console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    function playGame() {
        // for (let i = 0; i < 5; i++) {
        //     console.log(`Round ${i + 1}`);
        //     const humanChoice = getHumanChoice();
        //     const computerChoice = getComputerChoice();
        //     playRound(humanChoice, computerChoice);
        // };

        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener(("click"), () => {
                playRound(button.id, getComputerChoice())
            });
        });

        if (humanScore > computerScore) {
            console.log("Congratulations! You win the game!");
        } else if (computerScore > humanScore) {
            console.log("Computer wins the game! Better luck next time.");
        } else {
            console.log("The game is a tie!");
        }
        console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    playGame();
