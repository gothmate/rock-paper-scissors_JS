let score = 0
let jCont = 0
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const possibleChoices = document.querySelectorAll('button')
const chancesResult = document.querySelector('.botoes')
const items = ['paper', 'scissors', 'rock']
let resultGame = document.getElementById('result-roll')
let result = 0
let userChoice
let won = false

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
    won = true
  } else if (clicado == 'rock' && items[compRandom] == 'paper') {
    result = -1
    score += result
    won = false
  } else if (clicado == 'paper' && items[compRandom] == 'rock') {
    result = 1
    score += result
    won = true
  } else if (clicado == 'paper' && items[compRandom] == 'scissors') {
    result = -1
    score += result
    won = false
  } else if (clicado == 'scissors' && items[compRandom] == 'paper') {
    result = 1
    score += result
    won = true
  } else if (clicado == 'scissors' && items[compRandom] == 'rock') {
    result = -1
    score += result
    won = false
  } else {
    result = 0
    score += result
    won = undefined
  }
  optionSelected(compRandom, player)
  document.querySelector('.player').innerHTML = `<h3>${score}</h3>`
}

function optionSelected(selectionComp, selectionPlayer) {
  let winResult
  if (won == true) {
    winResult = 'You win!'
  } else if (won == false) {
    winResult = 'You lose.'
  } else {
    winResult = 'Draw game.'
  }
  resultGame.innerHTML = `<h3>You selected <span>${selectionPlayer}</span></h3>
  <p>The game selected <span>${items[selectionComp]}</span></p>
  <p>${winResult}</p>`
}

var newWindow

function popupRules() {
  newWindow = window.open(
    'rules.html',
    'resizable=none, top=50, left=50, titlebar=no, toolbar=no'
  )
  return newWindow
}

function closePopupRules() {
  window.close()
}
