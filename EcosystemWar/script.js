const dinasaur = 0;
const human = 1;
const sniper = 2;
function getComputerChoice() {
    let computerselection = Math.floor(Math.random() * 3);
    return computerselection;
    // Random Computer Choice
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection){
        return "draw";
    }
    else if ((playerSelection == 0 && computerSelection == 2) || (playerSelection == 1 && computerSelection == 0) || (playerSelection == 2 && computerSelection == 1)){
        return "playerWon";
    }
    else {
        return "playerLost";
    }
    // Plays a round taking into account pS and cS
}

function selectWeapon() {
    let weapon = prompt("Choose dinasaur, human, sniper")
    if (weapon.toLowerCase == dinasaur) {
        return 0;
    }
    else if (weapon.toLowerCase == human) {
        return 1;
    }
    else {
        return 2;
    }
    // The player selects r, p or s
}
function game() {
    let timesWonPlayer = 0;
    let timesWonComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = selectWeapon();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result == "playerWon") {
            timesWonPlayer++;
        }
        else if (result == "playerLost") {
            timesWonComputer++;
        }
        console.log(`${playerSelection}, ${computerSelection}`);
        if(i== 4){
        if(timesWonComputer > timesWonPlayer){
            console.log(`Computer Won ${timesWonComputer}-${timesWonPlayer}`);
        }
        else if (i== 4){
            if(timesWonComputer < timesWonPlayer){
                console.log(`Player Won ${timesWonPlayer}-${timesWonComputer}`);
            }
        }
         if (i== 4){
            if(timesWonComputer == timesWonPlayer){
                console.log(`Draw ${timesWonPlayer}-${timesWonComputer}`);
            }
        }
        // Plays the game 5 times
    }
}
}
game()