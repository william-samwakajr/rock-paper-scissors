const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerImage = document.querySelector('.player-image');
const computerImage = document.querySelector('.computer-image');
const gameNumber = document.querySelector('.number');
const announcer = document.querySelector('.point');
const computerScore = document.querySelector('.computer-score');
const playerScore = document.querySelectorAll('.player-score');
const choices = ['rock', 'paper', 'scissors']

class contestant {
    constructor() {
        this.points = 0;
        this.winstatus = null;
        this.choice = null;
    }
}

const player = new contestant();
const computer = new contestant();

const winConditon = new Promise((res, rej) => {
    setTimeout(() => {
        res(3);
    }, 2000)
})

function computerTurn() {
    if (computer.choice == 'rock') {
        computerImage.src = "./assets/computer rock.png";
    } else if (computer.choice == 'paper') {
        computerImage.src = "./assets/computer hand.png";
    } else if (computer.choice == 'scissors') {
        computerImage.src = "./assets/computer scissors.png";
    }
};
rock.addEventListener('click', () => {
    announcer.innerHTML = '';
    playerImage.src = "./assets/player rock.png";
    player.choice = choices[0]
    computer.choice = choices[Math.floor(Math.random() * 3)]
    winConditon
        .then(() => {
            gameNumber.innerHTML = 1;
        }).then(() => {
            setTimeout(() => {
                gameNumber.innerHTML = 2;
            }, 1000)
        }).then(() => {
            setTimeout(() => {
                gameNumber.innerHTML = 3;
            }, 2000)
        }).then(() => {
            setTimeout(() => {
                gameNumber.innerHTML = '';
                computerTurn()
            }, 2500)
        }).then(() => {
            setTimeout(() => {
                if (player.choice == 'rock' && computer.choice == 'rock') {
                    announcer.innerHTML = 'DRAW';
                } else if (player.choice == 'rock' && computer.choice == 'scissors') {
                    announcer.innerHTML = 'WINNER';
                    player.points += 1;
                    playerScore.innerHTML = '1';
                } else if (player.choice == 'rock' && computer.choice == 'paper') {
                    announcer.innerHTML = 'LOSER';
                    computer.points += 1;
                    computerScore.innerHTML == '1';
                }
            }, 2600)
        })
});
paper.addEventListener('click', () => {
    announcer.innerHTML = '';
    playerImage.src = "./assets/player paper.png";
    player.choice = choices[0]
    computer.choice = choices[Math.floor(Math.random() * 3)]
    winConditon
        .then(() => {
            gameNumber.innerHTML = 1;
        }).then(() => {
            setTimeout(() => {
                gameNumber.innerHTML = 2;
            }, 1000)
        }).then(() => {
            setTimeout(() => {
                gameNumber.innerHTML = 3;
            }, 2000)
        }).then(() => {
            setTimeout(() => {
                gameNumber.innerHTML = '';
                computerTurn()
            }, 2500)
        }).then(() => {
            setTimeout(() => {
                if (player.choice == 'paper' && computer.choice == 'paper') {
                    announcer.innerHTML = 'DRAW';
                } else if (player.choice == 'paper' && computer.choice == 'rock') {
                    announcer.innerHTML = 'WINNER';
                    player.points += 1;
                    playerScore.innerHTML = '1';
                } else if (player.choice == 'paper' && computer.choice == 'scissors') {
                    announcer.innerHTML = 'LOSER';
                    computer.points += 1;
                    computerScore.innerHTML == '1';
                }
            }, 2600)
        })
})
scissors.addEventListener('click', () => {
    announcer.innerHTML = '';
    playerImage.src = "./assets/player scissors.png"
    player.choice = choices[0]
    computer.choice = choices[Math.floor(Math.random() * 3)]
    winConditon
        .then(() => {
            gameNumber.innerHTML = 1;
        }).then(() => {
            setTimeout(() => {
                gameNumber.innerHTML = 2;
            }, 1000)
        }).then(() => {
            setTimeout(() => {
                gameNumber.innerHTML = 3;
            }, 2000)
        }).then(() => {
            setTimeout(() => {
                gameNumber.innerHTML = '';
                computerTurn()
            }, 2500)
        }).then(() => {
            setTimeout(() => {
                if (player.choice == 'scissors' && computer.choice == 'rock') {
                    announcer.innerHTML = 'DRAW';
                } else if (player.choice == 'scissors' && computer.choice == 'paper') {
                    announcer.innerHTML = 'WINNER';
                    player.points += 1;

                } else if (player.choice == 'scissors' && computer.choice == 'rock') {
                    announcer.innerHTML = 'LOSER';
                    computer.points += 1;

                }
            }, 2600)
        })
});