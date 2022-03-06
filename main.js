const computerPlay = () => {
    const options = ['Rock', 'Paper', 'Scissors']
    const randNum = Math.floor(Math.random() * 3)

    console.log(options[randNum])
    return options[randNum]
}

const playRound = (e) => {
    const computer = computerPlay();
    const player = e.target.innerText;
    if ( player === computer ) {
        console.log('Its a tie.')
        return 0
    } else {
        if (player === 'Rock') {
            if (computer === 'Paper') {
                console.log('You lose! Paper beats rock.')
                return 1
            } else if (computer === 'Scissors') {
                console.log('You win! Rock beats scissors.')
                return 2
            }
        } else if (player === 'Paper') {
            if (computer === 'Rock') {
                console.log('You win! Paper beats rock.')
                return 2
            } else if (computer === 'Scissors') {
                console.log('You lose! Scissors beat paper.')
                return 1
            }
        } else if (player === 'Scissors') {
            if (computer === 'Paper') {
                console.log('You win! Scissors beat paper.')
                return 2
            } else if (computer === 'Rock') {
                console.log('You lose! Rock beats scissors.')
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

rockBtn.addEventListener('click', playRound);
rockBtn.addEventListener('click', (e) => {
    console.log(e.target.innerText)
});

paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);

//game()

