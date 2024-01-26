const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const image = document.querySelector('.player-image')
let computerChoice = null;

class contestant {
    constructor() {
        this.points = 0;
        this.winstatus = null;
    }
}

const player = new contestant();
const computer = new contestant();

rock.addEventListener('click', () => {
    image.src = "./assets/player paper.png"
})