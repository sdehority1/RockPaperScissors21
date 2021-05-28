//STATIC ON LOAD 
let i = 0;
let j = 0;
let k = 0;
let selection = [];
let math = () => {
    let computerPlay = Math.random();
    let humanPlay = Math.random();
    computerPlay;
    humanPlay;
    if (computerPlay > humanPlay) {
        //console.log('computer')
        i++;
        k++;
        document.getElementById("computerScore").innerHTML = i;
        document.getElementById("gameRound").innerHTML = k;
        switch (selection) {
            case 'rock':
                document.getElementById("result").innerHTML =  `Paper beats rock. The computer won this round :(`;
                break;
            case 'paper':
                document.getElementById("result").innerHTML = `Scissors beats paper. The computer won this round :(`;
                break;
            case 'scissors':
                document.getElementById("result").innerHTML = `Rock beats scissors. The computer won this round :(`;
                break;
        }
    } else if (computerPlay < humanPlay) {
        //console.log('human')
        j++;
        k++;
        document.getElementById("playerScore").innerHTML = j;
        document.getElementById("gameRound").innerHTML = k;
        switch (selection) {
            case 'rock':
                document.getElementById("result").innerHTML = `Rock beats scissors – you win!`;
                break;
            case 'paper':
                document.getElementById("result").innerHTML = `Paper beats rock – you win!`;
                break;
            case 'scissors':
                document.getElementById("result").innerHTML = `Scissors beats paper – you win!`;
                break;
        }
    } else {
        console.log('tie')
        k++;
        document.getElementById("result").innerHTML = `It's a tie!`;
    }
    if (i == 5) {
        //document.getElementById("seriesResult").innerHTML = `The computer won the series, ${i} to ${j}`;
        alert(`The computer won the series, ${i} to ${j}`);
        document.getElementById("playerScore").innerHTML = 0;
        document.getElementById("computerScore").innerHTML = 0;
        document.getElementById("gameRound").innerHTML = 0;
        i = 0;
        j = 0;
        k = 0;
    }
    if (j == 5) {
        //document.getElementById("seriesResult").innerHTML = `Man has triumphed over machine, ${j} to ${i}`;
        alert(`Man has triumphed over machine, ${j} to ${i}`);
        document.getElementById("playerScore").innerHTML = 0;
        document.getElementById("computerScore").innerHTML = 0;
        document.getElementById("gameRound").innerHTML = 0;
        i = 0;
        j = 0;
        k = 0;
    }
    computerPlay = Math.random();
    humanPlay = Math.random();
}

//GAME FUNCS
rock.onclick = function () {
    selection = 'rock';
    math();
}

paper.onclick = function () {
    selection = 'paper';
    math();
}

scissors.onclick = function () {
    selection = 'scissors';
    math();
}
