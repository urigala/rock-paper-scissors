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
        return 0
    } else {
        if (player === 'Rock') {
            if (computer === 'Paper') {
                roundResults.textContent = 'You lose! Paper beats rock.';
                return 1
            } else if (computer === 'Scissors') {
                roundResults.textContent = 'You win! Rock beats scissors.';
                return 2
            }
        } else if (player === 'Paper') {
            if (computer === 'Rock') {
                roundResults.textContent = 'You win! Paper beats rock.';
                return 2
            } else if (computer === 'Scissors') {
                roundResults.textContent = 'You lose! Scissors beat paper.';
                return 1
            }
        } else if (player === 'Scissors') {
            if (computer === 'Paper') {
                roundResults.textContent = 'You win! Scissors beat paper.';
                return 2
            } else if (computer === 'Rock') {
                roundResults.textContent = 'You lose! Rock beats scissors.';
                return 1
            }
        }
    }
}

const game = () => {
    let userWins = 0
    let compWins = 0

    for (let i = 0; i < 5; i++) {
        let playerChoice = playerSelection()
        let compuerChoice = computerPlay()
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

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);

//game()

