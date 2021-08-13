const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let winCount = 0;
let drawCount = 0;
let loseCount = 0;
let round = 1;

eventListeners();
function eventListeners() {
  rock.addEventListener("click", () => imageRotation("Rock"));
  paper.addEventListener("click", () => imageRotation("Paper"));
  scissors.addEventListener("click", () => imageRotation("Scissors"));
}

function computerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function imageRotation(userChoice) {
  const imageUs = document.querySelector(".we-choice img");
  const imageComp = document.querySelector(".bot-choice img");
  imageUs.src = "../Assest/Images/Rock.png";
  imageComp.src = "../Assest/Images/comp-Rock.png";

  const getFromComputer = computerChoice();

  imageUs.animate(
    [{ transform: "rotate(0)" }, { transform: "rotate(-40deg)" }],
    {
      duration: 400,
      delay: 50,
      iterations: 6,
      direction: "alternate",
    }
  );

  imageComp.animate(
    [{ transform: "rotate(0)" }, { transform: "rotate(40deg)" }],
    {
      duration: 400,
      delay: 50,
      iterations: 6,
      direction: "alternate",
    }
  );

  setTimeout(() => {
    switch (userChoice) {
      case "Paper":
        imageUs.src = "../Assest/Images/Paper.png";
        break;
      case "Scissors":
        imageUs.src = "../Assest/Images/Scissors.png";
        break;
    }
    switch (getFromComputer) {
      case "Paper":
        imageComp.src = "../Assest/Images/comp-Paper.png";
        break;
      case "Scissors":
        imageComp.src = "../Assest/Images/comp-Scissors.png";
        break;
    }
    game(userChoice, getFromComputer);
    rounds(userChoice, getFromComputer);
  }, 2400);
}

function game(userChoice, getFromComputer) {
  const userComp = userChoice + getFromComputer;

  switch (userComp) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win();
      break;

    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose();
      break;

    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw();
      break;
  }
}

function win() {
  winCount++;
  round++;
  document.getElementById("win").innerHTML = winCount;
  document.getElementById("round-counter").innerHTML = round;
  result("You Win!");
}

function lose() {
  loseCount++;
  round++;
  document.getElementById("lose").innerHTML = loseCount;
  document.getElementById("round-counter").innerHTML = round;
  result("You Lose!");
}

function draw() {
  drawCount++;
  round++;
  document.getElementById("draw").innerHTML = drawCount;
  document.getElementById("round-counter").innerHTML = round;
  result("Draw!");
}

function result(res) {
  const resDivs = document.querySelector(".winner");
  if (resDivs.children.length >= 3) {
    resDivs.children[0].remove();
  }

  const resSection = document.querySelector(".winner");
  const div = document.createElement("div");
  div.classList.add("winner-content");
  div.innerHTML += `
      <hr>
      <div class="result">
        <p>${round - 1}</p>
        <span>${res}</span>
      </div>
  `;
  resSection.appendChild(div);
}

function rounds(we, they) {
  const roundSection = document.querySelector(".counter-rounds");
  const div = document.createElement("div");
  div.classList.add('mainIcons')
  let paperIcon
  let paperCompIcon

  if (roundSection.children.length >= 3) {
    roundSection.children[0].remove();
  }

  switch (we) {
    case "Paper":
      paperIcon = `<i class="roundPIcon far fa-hand-paper"></i>`;
      break;

    case "Rock":
      paperIcon = `<i class="roundPIcon far fa-hand-rock"></i>`;
      break;

    case "Scissors":
      paperIcon = `<i class="roundGoodIcon far fa-hand-scissors"></i>`;
      break;
  }

  switch (they) {
    case "Paper":
      paperCompIcon = `<i class="roundNIcon far fa-hand-paper"></i>`;
      break;

    case "Rock":
      paperCompIcon = `<i class="roundNIcon far fa-hand-rock"></i>`;
      break;

    case "Scissors":
      paperCompIcon = `<i class="far fa-hand-scissors"></i>`;
      break;
  }

  div.innerHTML += `
    <hr>
    <div class="rounds-content">
      <p>${paperIcon}</p>
      <span>${round - 1}</span>
      <p>${paperCompIcon}</p>
    </div>
  `;

  roundSection.appendChild(div);
}
