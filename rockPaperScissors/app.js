
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

//globals outside the function
let userChoice
let computerChoice
let result

//listening for click
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

//pick random computer response 
function generateComputerChoice(){
    //random number 1,2,3 only
    const randomNumber = Math.floor(Math.random() * 3) +1
    //console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice = 'rock'
        //console.log(computerChoice)
    }
    if (randomNumber ===2){
        computerChoice = 'paper'
        //console.log(computerChoice)
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
    } 
    // put random in display
    computerChoiceDisplay.innerHTML = computerChoice
}
// get results function
function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'Paper Wins!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = "Rock Wins!"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = "Scissors Wins!"
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = "Rock Wins!"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = "Rock Wins!"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = "Scissors Win!"
    }
    getResult.innerHTML = result
    console.log(result)
    }