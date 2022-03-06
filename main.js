const computerPlay = () => {
    const options = ['Rock', 'Paper', 'Scissors']
    const randNum = Math.floor(Math.random() * 3)

    return options[randNum]
}

const playRound = (e) => {
    const computer = computerPlay();
    const player = e.target.innerText;
    if ( player === computer ) {
        roundResults.textContent = 'Its a tie.';
    } else {
        if (player === 'Rock') {
            if (computer === 'Paper') {
                roundResults.textContent = 'You lose! Paper beats rock.';
                computerScore++;
                computerSpan.innerText = computerScore;
            } else if (computer === 'Scissors') {
                roundResults.textContent = 'You win! Rock beats scissors.';
                userScore++;
                userSpan.innerText = userScore;
            }
        } else if (player === 'Paper') {
            if (computer === 'Rock') {
                roundResults.textContent = 'You win! Paper beats rock.';
                userScore++;
                userSpan.innerText = userScore;
            } else if (computer === 'Scissors') {
                roundResults.textContent = 'You lose! Scissors beat paper.';
                computerScore++
                computerSpan.innerText = computerScore;
            }
        } else if (player === 'Scissors') {
            if (computer === 'Paper') {
                roundResults.textContent = 'You win! Scissors beat paper.';
                userScore++;
                userSpan.innerText = userScore;
            } else if (computer === 'Rock') {
                roundResults.textContent = 'You lose! Rock beats scissors.';
                computerScore++;
                computerSpan.innerText = computerScore;
            }
        }
    }
}

const game = () => {
    let userWins = 0
    let compWins = 0

    for (let i = 0; i < 5; i++) {
        let result = playRound(playerChoice, compuerChoice)
        if (result === 0) {
            continue
        } else if (result === 1) {
            compWins++
        } else {
            userWins++
        }
    }
    console.log('Final Score: \n' + 'Player: ' + userWins + '\nComputer: ' + compWins)
}

const rockBtn = document.querySelector('.btn1');
const paperBtn = document.querySelector('.btn2');
const scissorsBtn = document.querySelector('.btn3');
const roundResults = document.querySelector('.round-result');
const userSpan = document.querySelector('.user-score');
const computerSpan = document.querySelector('.computer-score');

let userScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);

//game()

