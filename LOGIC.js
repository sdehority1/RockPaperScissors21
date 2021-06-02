//STATIC ON LOAD 
let i = 0;
let j = 0;
let k = 0;
let selection = [];
document.getElementById("result").innerHTML = "Click below to play!"

//MATH FUNCTION
let math = () => {
    let computerPlay = Math.random();
    let humanPlay = Math.random();
    computerPlay;
    humanPlay;
    //COMPUTERPLAY
    if (computerPlay > humanPlay) {
        i++;
        k++;
        document.getElementById("computerScore").innerHTML = i;
        document.getElementById("gameRound").innerHTML = k;
        switch (selection) {
            case 'rock':
                document.getElementById("paper").style.border = 'none';
                document.getElementById("scissors").style.border = 'none';
                document.getElementById("computerScissors").style.border = 'none';
                document.getElementById("computerRock").style.border = 'none';
                document.getElementById("result").innerHTML = `Paper beats rock. The computer won this round :(`;
                document.getElementById("computerPaper").style.border = 'dashed';
                document.getElementById("rock").style.border = 'dashed';
                break;
            case 'paper':
                document.getElementById("rock").style.border = 'none';
                document.getElementById("scissors").style.border = 'none';
                document.getElementById("computerPaper").style.border = 'none';
                document.getElementById("computerRock").style.border = 'none';
                document.getElementById("result").innerHTML = `Scissors beats paper. The computer won this round :(`;
                document.getElementById("paper").style.border = 'dashed';
                document.getElementById("computerScissors").style.border = 'dashed';
                break;
            case 'scissors':
                document.getElementById("rock").style.border = 'none';
                document.getElementById("paper").style.border = 'none';
                document.getElementById("computerPaper").style.border = 'none';
                document.getElementById("computerScissors").style.border = 'none';
                document.getElementById("result").innerHTML = `Rock beats scissors. The computer won this round :(`;
                document.getElementById("scissors").style.border = 'dashed';
                document.getElementById("computerRock").style.border = 'dashed';
                break;
        }
        //HUMANPLAY
    } else if (computerPlay < humanPlay) {
        //console.log('human')
        j++;
        k++;
        document.getElementById("playerScore").innerHTML = j;
        document.getElementById("gameRound").innerHTML = k;
        switch (selection) {
            case 'rock':
                document.getElementById("paper").style.border = 'none';
                document.getElementById("scissors").style.border = 'none';
                document.getElementById("computerPaper").style.border = 'none';
                document.getElementById("computerRock").style.border = 'none';
                document.getElementById("result").innerHTML = `Rock beats scissors – you win!`;
                document.getElementById("computerScissors").style.border = 'dashed';
                document.getElementById("rock").style.border = 'dashed';
                break;
            case 'paper':
                document.getElementById("rock").style.border = 'none';
                document.getElementById("scissors").style.border = 'none';
                document.getElementById("computerPaper").style.border = 'none';
                document.getElementById("computerScissors").style.border = 'none';
                document.getElementById("result").innerHTML = `Paper beats rock – you win!`;
                document.getElementById("paper").style.border = 'dashed';
                document.getElementById("computerRock").style.border = 'dashed';
                break;
            case 'scissors':
                document.getElementById("rock").style.border = 'none';
                document.getElementById("paper").style.border = 'none';
                document.getElementById("computerRock").style.border = 'none';
                document.getElementById("computerScissors").style.border = 'none';
                document.getElementById("result").innerHTML = `Scissors beats paper – you win!`;
                document.getElementById("scissors").style.border = 'dashed';
                document.getElementById("computerPaper").style.border = 'dashed';
                break;
        }
        //TIE
    } else {
        k++;
        document.getElementById("result").innerHTML = `It's a tie!`;
    }
    //GAME END PLAYER WIN
    if (i === 5) {
        alert(`The computer won the series, ${i} to ${j}`);
        document.getElementById("playerScore").innerHTML = 0;
        document.getElementById("computerScore").innerHTML = 0;
        document.getElementById("gameRound").innerHTML = 0;
        document.getElementById("rock").style.border = 'none';
        document.getElementById("paper").style.border = 'none';
        document.getElementById("scissors").style.border = 'none';
        document.getElementById("computerRock").style.border = 'none';
        document.getElementById("computerScissors").style.border = 'none';
        document.getElementById("computerPaper").style.border = 'none';
        document.getElementById("result").innerHTML = "Click below to play!"
        i = 0;
        j = 0;
        k = 0;
    }
    //GAME END COMPUTER WIN
    if (j === 5) {
        alert(`Man has triumphed over machine, ${j} to ${i}`);
        document.getElementById("playerScore").innerHTML = 0;
        document.getElementById("computerScore").innerHTML = 0;
        document.getElementById("gameRound").innerHTML = 0;
        document.getElementById("rock").style.border = 'none';
        document.getElementById("paper").style.border = 'none';
        document.getElementById("scissors").style.border = 'none';
        document.getElementById("computerRock").style.border = 'none';
        document.getElementById("computerScissors").style.border = 'none';
        document.getElementById("computerPaper").style.border = 'none';
        document.getElementById("result").innerHTML = "Click below to play!"
        i = 0;
        j = 0;
        k = 0;
    }
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
