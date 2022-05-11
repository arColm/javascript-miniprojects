
function computerPlay() {
    let decision = Math.floor(Math.random()*3);
    switch(decision) {
        case 0 :
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}


function win(playerSelection,computerSelection) {
    const body= document.querySelector("body");
    body.style.backgroundColor="rgb(34, 49, 36)";

    const text = document.querySelector("h1");
    text.textContent=`You win! ${playerSelection} - ${computerSelection}`
}

function tie(playerSelection,computerSelection) {
    const body= document.querySelector("body");
    body.style.backgroundColor="rgb(34, 34, 49)";
    
    const text = document.querySelector("h1");
    text.textContent=`Tie! ${playerSelection} - ${computerSelection}`

}

function lose(playerSelection,computerSelection) {
    const body= document.querySelector("body");
    body.style.backgroundColor="rgb(49, 34, 34)";
    
    const text = document.querySelector("h1");
    text.textContent=`You lose! ${playerSelection} - ${computerSelection}`
    
}

function game(playerSelection, computerSelection) {
    if(playerSelection==="rock") {
        switch(computerSelection) {
            case "rock":
                tie(playerSelection,computerSelection);
                break;
            case "paper":
                lose(playerSelection,computerSelection);
                break;
            case "scissors":
                win(playerSelection,computerSelection);
                break;
        }
    } else if(playerSelection==="scissors") {
        switch(computerSelection) {
            case "scissors":
                tie(playerSelection,computerSelection);
                break;
            case "paper":
                win(playerSelection,computerSelection);
                break;
            case "rock":
                lose(playerSelection,computerSelection);
                break;
        }

    } else if(playerSelection==="paper") {
        switch(computerSelection) {
            case "rock":
                win(playerSelection,computerSelection);
                break;
            case "paper":
                tie(playerSelection,computerSelection);
                break;
            case "scissors":
                lose(playerSelection,computerSelection);
                break;
        }
    } else {
        console.log("Invalid input");
    }
}




const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", e => {
        let userInput = button.getAttribute("id");
        game(userInput,computerPlay());
    })
})
