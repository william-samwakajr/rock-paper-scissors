const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let computerChoice = Math.floor(Math.random() * 3);

class contestant {
    constructor() {
        this.points = 0;
        this.winstatus = null;
    }
}

const player = new contestant();
const computer = new contestant();