const gridContainer = document.querySelector("#grid-container")
const resetBtn = document.querySelector("#clear-button")
let changeColor = document.querySelector("#change-color").value

window.addEventListener("load", defaultGrid)
resetBtn.addEventListener("click", changeGridSize)

document.querySelector("#change-color").onchange = function () {
  changeColor = this.value

  document.querySelector(
    "#grid-container"
  ).style.border = `2px solid ${changeColor}`
}

function defaultGrid() {
  gridSize(16)
  fillGrid(16)
}

function gridSize(cellSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${cellSize}, 1fr)`
}

function fillGrid(cellSize) {
  for (let i = 0; i < cellSize * cellSize; i++) {
    const gridCell = document.createElement("div")

    gridCell.addEventListener("mouseover", rainbow)
    gridContainer.appendChild(gridCell)
  }
}

function rainbow(e) {
  const R = Math.floor(Math.random() * 256)
  const G = Math.floor(Math.random() * 256)
  const B = Math.floor(Math.random() * 256)
  e.target.style.background = `rgb(${R}, ${G},${B})`
}

function changeGridSize() {
  let setSize = prompt("Enter the grid size you want max size: 64.")

  if (setSize !== null) {
    setSize = parseInt(setSize)
    if (setSize < 1 || setSize > 64 || Number.isNaN(setSize)) {
      alert("Enter a number from 1-64 range")
      GridSize()
    } else {
      clear()
      gridSize(setSize)
      fillGrid(setSize)
    }
  }
}

function clear() {
  const gridArray = Array.from(gridContainer.childNodes)
  gridArray.forEach((element) => {
    gridContainer.removeChild(element)
  })
}
