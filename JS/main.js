const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')



eventListeners()
function eventListeners() {
  rock.addEventListener('click', () => game('Rock'))
  paper.addEventListener('click', () => game('Paper'))
  scissors.addEventListener('click', () => game('Scissors'))
}

function computerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  const random = Math.floor(Math.random() * 3)
  return choices[random]
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

