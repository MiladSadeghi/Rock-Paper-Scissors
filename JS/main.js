const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

let winCount = 0
let drawCount = 0
let loseCount = 0

eventListeners()
function eventListeners() {
  rock.addEventListener('click', () => imageRotation('Rock'))
  paper.addEventListener('click', () => imageRotation('Paper'))
  scissors.addEventListener('click', () => imageRotation('Scissors'))
}

function computerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const random = Math.floor(Math.random() * 3)
  return choices[random]
}

function imageRotation(userChoice) {
  const imageUs = document.querySelector('.we-choice img')
  const imageComp = document.querySelector('.bot-choice img')
  imageUs.src = "../Assest/Images/Rock.png"
  imageComp.src = "../Assest/Images/comp-Rock.png"

  const getFromComputer = computerChoice()

  imageUs.animate([
    {transform: 'rotate(0)'},
    {transform: 'rotate(-40deg)'}
  ], {
    duration: 400,
    delay: 50,
    iterations: 6,
    direction: 'alternate'
  })

  imageComp.animate([
    {transform: 'rotate(0)'},
    {transform: 'rotate(40deg)'}
  ], {
    duration: 400,
    delay: 50,
    iterations: 6,
    direction: 'alternate'
  })

  setTimeout(() => {
    switch (userChoice) {
      case 'Paper':
        imageUs.src = '../Assest/Images/Paper.png'
        break;
      case 'Scissors':
        imageUs.src = '../Assest/Images/Scissors.png'
        break;
    }
    switch (getFromComputer) {
      case 'Rock':
        imageComp.src = '../Assest/Images/comp-Rock.png'
        break;
      case 'Paper':
        imageComp.src = '../Assest/Images/comp-Paper.png'
        break;
      case 'Scissors':
        imageComp.src = '../Assest/Images/comp-Scissors.png'
        break;
    }
    
  }, 2400);
}

function game(userChoice) {
  const userComp = userChoice+computerChoice()
  
  switch (userComp) {
    case 'RockScissors':
    case 'PaperRock':
    case 'ScissorsPaper':
      win()
      break;
    
    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
      lose()
      break;
    
    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorsScissors':
      draw()
      break;
  }
}
