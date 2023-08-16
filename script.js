let comp = Math.floor(Math.random() * 3);
let ans = document.getElementById('compans');
let message = document.getElementById('result');
const rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
rock.addEventListener('click', function() {
    let me = 1;
    comp = Math.floor(Math.random() * 4);
    if (me == comp) {
        message.innerText = "Draw";
    } else if (me == 1 && comp == 2) {
        message.innerText = "You Lose";
    } else if (me == 1 && comp == 3) {
        message.innerText = "You Win";
    }
    if (comp == 1) {
        ans.innerText = " rock ";
    } else if (comp == 2) {
        ans.innerText = "paper";
    } else if (comp == 3) {
        ans.innerText = "scissors";
    }
});
paper.addEventListener('click', function() {
    let me = 2;
    comp = Math.floor(Math.random() * 4);
    if (me == comp) {
        message.innerText = "Draw"
    } else if (me == 2 && comp == 3) {
        message.innerText = "You Lose"
    } else if (me == 2 && comp == 1) {
        message.innerText = "You Win"
    }
    if (comp == 1) {
        ans.innerText = " rock ";
    } else if (comp == 2) {
        ans.innerText = "paper";
    } else if (comp == 3) {
        ans.innerText = "scissors";
    }
});
scissors.addEventListener('click', function() {
    let me = 3;
    comp = Math.floor(Math.random() * 4);
    if (me == comp) {
        message.innerText = "Draw"
    } else if (me == 3 && comp == 1) {
        message.innerText = "You Lose"
    } else if (me == 3 && comp == 2) {
        message.innerText = "You Win"
    }
    if (comp == 1) {
        ans.innerText = " rock ";
    } else if (comp == 2) {
        ans.innerText = "paper";
    } else if (comp == 3) {
        ans.innerText = "scissors";
    }
});