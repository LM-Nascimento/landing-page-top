let computerScore = 0
let humanScore = 0
let humanChoice = ""

function getComputerChoice(){
    const chance = Math.random()
    if(chance<1/3){
        return "Rock"
    }
    else if(chance<2/3){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

function getHumanChoice(){
    const choice = prompt("choose between R P or S: ")
    return choice
}

function updateScore(computerChoice, humanChoice){
    if(computerChoice=="Rock"){
        if(humanChoice == "Scissors"){
            computerScore += 1
            return "The computer won!"
        }
        else if(humanChoice == "Paper"){
            humanScore += 1
            return "You won!"
        }
        else{
            return "It was a tie!"
        }
    }
    else if(computerChoice=="Paper"){
        if(humanChoice == "Rock"){
            computerScore += 1
            return "The computer won!"
        }
        else if(humanChoice == "Scissors"){
            humanScore += 1
            return "You won!"
        }
        else{
            return "It was a tie!"
        }
    }
    else{//computerChoice == "Scissors"
        if(humanChoice == "Paper"){
            computerScore += 1
            return "The computer won!"
        }
        else if(humanChoice == "Rock"){
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

//while (computerScore+humanScore < 5){
//    const humanChoice = getHumanChoice()
//    const computerChoice = getComputerChoice()
//    const message = updateScore(computerChoice, humanChoice)
//    logResults(computerChoice, humanChoice, message)
//}
// interaction with the ui
 const rockImage = document.getElementById("rock-img")
 const paperImage = document.getElementById("paper-img")
 const scissorsImage = document.getElementById("scissor-img")
 const playButton = document.getElementById("play")
 const computerResultImage = document.getElementById("computer-result")
 const computerResultParagraph = document.getElementById("computer-result-text")
 const humanResultImage = document.getElementById("human-result")
 const humanResultParagraph = document.getElementById("human-result-text")
 const scoreHeader = document.getElementById("score")
 const winnerHeader = document.getElementById("winner")

 function setHumanChoice(event){
    targetId = event.target.id
    rockImage.style.outlineColor = ""
    paperImage.style.outlineColor = ""
    scissorsImage.style.outlineColor = ""
    if(targetId=="rock-img"){
        humanChoice = "Rock"
        rockImage.style.outlineColor = "#13d14c"
    }
    else if(targetId=="paper-img"){
        humanChoice = "Paper"
        paperImage.style.outlineColor = "#13d14c"
    }
    else{
        humanChoice = "Scissors"
        scissorsImage.style.outlineColor = "#13d14c"
    }
    playRound()
 }
 function getImageSource(choice){
    if(choice == "Rock"){return "images/rock.png"}
    else if(choice == "Paper"){return "images/paper.png"}
    else{return "images/scissor.png"}
 }

 function playRound(){
    if(humanChoice == ""){
        alert("you must select rock paper or scissors")
    }
    else{
        const computerChoice = getComputerChoice()
        const message = updateScore(computerChoice, humanChoice)
        computerResultImage.src = getImageSource(computerChoice)
        computerResultParagraph.innerText = "The computer chose " + computerChoice + "!"
        humanResultImage.src = getImageSource(humanChoice)
        humanResultParagraph.innerText = "You chose " + humanChoice + "!"
        scoreHeader.innerText = "Computer: " + computerScore + " You: " + humanScore
        winnerHeader.innerText = message
    }
 }


 rockImage.addEventListener("click", setHumanChoice)
 paperImage.addEventListener("click", setHumanChoice)
 scissorsImage.addEventListener("click", setHumanChoice)
 playButton.addEventListener("click", playRound)

