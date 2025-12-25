let computerScore = 0
let humanScore = 0

function getComputerChoice(){
    const chance = Math.random()
    if(chance<1/3){
        return "R"
    }
    else if(chance<2/3){
        return "P"
    }
    else{
        return "S"
    }
}

function getHumanChoice(){
    const choice = prompt("choose between R P or S: ")
    return choice
}

function updateScore(computerChoice, humanChoice){
    //0 for ties
    // 1 for human win
    //-1 for comuter win
    if(computerChoice=="R"){
        if(humanChoice == "S"){
            computerScore += 1
            return "The computer won!"
        }
        else if(humanChoice == "P"){
            humanScore += 1
            return "You won!"
        }
        else{
            return "It was a tie!"
        }
    }
    else if(computerChoice=="P"){
        if(humanChoice == "R"){
            computerScore += 1
            return "The computer won!"
        }
        else if(humanChoice == "S"){
            humanScore += 1
            return "You won!"
        }
        else{
            return "It was a tie!"
        }
    }
    else{//computerChoice == S
        if(humanChoice == "P"){
            computerScore += 1
            return "The computer won!"
        }
        else if(humanChoice == "R"){
            humanScore += 1
            return "You won!"
        }
        else{
            return "It was a tie!"
        }
    }
}

function logResults(computerChoice, humanChoice, message){
    console.log("Computer choice: " + computerChoice)
    console.log("Your choice: " + humanChoice)
    console.log(message)
    console.log("Computer: " + computerScore + " You: " + humanScore)
}

while (computerScore+humanScore < 5){
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    const message = updateScore(computerChoice, humanChoice)
    logResults(computerChoice, humanChoice, message)
}