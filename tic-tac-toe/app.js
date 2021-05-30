const gameModule = (function () {
  "use strict"

  const gameStatsIndicator = document.getElementById("game-result")

  let runGame = false
  let endGame = false
  let currPlayer = "X"
  let gameData = ["", "", "", "", "", "", "", "", ""]

  const announceMsg = () => `${currPlayer} wins!`
  const tieResultMsg = "It's a tie!"
  const turnIndicator = () => `It's ${currPlayer} turn`
  const instruction = "Press play to start!"
  gameStatsIndicator.innerText = instruction

  const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  // main function or logic of the game

  function clickEvent(e) {
    const markedCell = e.target
    const clickedCellIndex = parseInt(markedCell.getAttribute("data-index"))

    if (gameData[clickedCellIndex] !== "" || !runGame) {
      return
    }
    clickPlay(markedCell, clickedCellIndex)
    evalResult()
  }
  // logic when a player clicks a square
  function clickPlay(clickedSquare, cellIndex) {
    gameData[cellIndex] = currPlayer
    clickedSquare.innerText = currPlayer

    if (currPlayer === "X") {
      clickedSquare.style.color = "black"
    } else {
      clickedSquare.style.color = "black"
    }
  }

  // function that checks when the game is done and passes turns

  function evalResult() {
    for (let i = 0; i <= 7; i++) {
      let a = gameData[winPattern[i][0]]
      let b = gameData[winPattern[i][1]]
      let c = gameData[winPattern[i][2]]

      if (!a || !b || !c) {
        continue
      }
      if (a === b && b === c) {
        endGame = true
        break
      }
    }
    if (endGame) {
      gameStatsIndicator.innerText = announceMsg()
      changeResultColor("000000")
      runGame = false
      return
    }

    let tieResult = !gameData.includes("")
    if (tieResult) {
      gameStatsIndicator.innerText = tieResultMsg
      changeResultColor("000000")
      runGame = false
      return
    }
    changeTurn()
  }

  
  // changes game status text color according to players turn
  function changeResultColor(color) {
    gameStatsIndicator.style.color = "#" + color
  }
  // logic for player turns changing
  function changeTurn() {
    currPlayer = currPlayer === "X" ? "O" : "X"
    gameStatsIndicator.innerText = turnIndicator()
    if (currPlayer === "X") {
      changeResultColor("000000")
    } else {
      changeResultColor("000000")
    }
  }
  
  function restart() {
    gameData = ["", "", "", "", "", "", "", "", ""]
    document
    .querySelectorAll(".grid-cell")
    .forEach((cell) => (cell.innerText = ""))
    runGame = false
    endGame = false
    currPlayer = "X"
    gameStatsIndicator.innerText = instruction
  }
    function play() {
  runGame = true
  gameStatsIndicator.innerText = turnIndicator()
  if (endGame === true) {
    runGame = false
    gameStatsIndicator.innerText = announceMsg()
  }
}
  return { clickEvent, restart, play }
})()


// Global event listeners for module function
document
.querySelectorAll(".grid-cell")
.forEach((cell) => cell.addEventListener("click", gameModule.clickEvent))

document
.querySelector("#restart-button")
.addEventListener("click", gameModule.restart)

document
.querySelector("#play-button")
.addEventListener("click", gameModule.play)

// document.querySelector("#play-button").addEventListener("click")
