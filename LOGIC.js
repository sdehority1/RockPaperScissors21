//STATIC ON LOAD 
let i = 0;
let j = 0;
let k = 0;
let math = () => {
    let computerPlay = Math.random();
    let humanPlay = Math.random();
    computerPlay;
    humanPlay;
    if (computerPlay > humanPlay) {
        console.log('computer')
        i++;
        k++;
        document.getElementById("computerScore").innerHTML = i;
        document.getElementById("gameRound").innerHTML = k;
        document.getElementById("result").innerHTML = `The computer won this round :(`;
    } else if (computerPlay < humanPlay) {
        console.log('human')
        j++;
        k++;
        document.getElementById("playerScore").innerHTML = j;
        document.getElementById("gameRound").innerHTML = k;
        document.getElementById("result").innerHTML = `You won this round!`;
    } else {
        console.log('tie')
        k++;
        document.getElementById("result").innerHTML = `It's a tie!`;
    }
    if (i == 5){
        document.getElementById("result").innerHTML = `The computer won the series, ${i} to ${j}`;
        i = 0;
        j = 0;
        k = 0;
    }
    if (j == 5){
        document.getElementById("result").innerHTML = `Man has triumphed over machine, ${j} to ${i}`;
        i = 0;
        j = 0;
        k = 0;
    }
    computerPlay = Math.random();
    humanPlay = Math.random();
}

//GAME FUNCS
rock.onclick = function () {
    math();
}

paper.onclick = function () {
    math();
}

scissors.onclick = function () {
    math();
}
