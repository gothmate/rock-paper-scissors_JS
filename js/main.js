let score = 0
let jCont = 0
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const possibleChoices = document.querySelectorAll('button')

const items = ['rock', 'paper', 'scissors']
let result = 0
let userChoice

possibleChoices.forEach(possibleChoice =>
  possibleChoice.addEventListener('click', e => {
    userChoice = e.target.id
    if (rock.value == userChoice) {
      choose(rock.value)
    } else if (paper.value == userChoice) {
      choose(paper.value)
    } else if (scissors.value == userChoice) {
      choose(scissors.value)
    }
  })
)

function choose(clicado) {
  let compRandom = Math.round((Math.random() * 10) / 5)
  let player = clicado

  if (clicado == 'rock' && items[compRandom] == 'scissors') {
    result = 1
    score += result
  } else if (clicado == 'rock' && items[compRandom] == 'paper') {
    result = -1
    score += result
  } else if (clicado == 'paper' && items[compRandom] == 'rock') {
    result = 1
    score += result
  } else if (clicado == 'paper' && items[compRandom] == 'scissors') {
    result = -1
    score += result
  } else if (clicado == 'scissors' && items[compRandom] == 'paper') {
    result = 1
    score += result
  } else if (clicado == 'scissors' && items[compRandom] == 'rock') {
    result = -1
    score += result
  } else {
    result = 0
    score += result
  }
  document.querySelector('.player').innerHTML = `<h3>${score}</h3>`

  console.log(player, items[compRandom], score)
}
