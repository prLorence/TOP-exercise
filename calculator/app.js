const numBtn = document.querySelectorAll("[data-input]")
const operaBtn = document.querySelectorAll("[data-operator]")
const eqlBtn = document.querySelector("[data-equals]")
const clrBtn = document.querySelector("[data-reset]")
const dltBtn = document.querySelector("[data-delete]")
const deciBtn = document.querySelector("[data-decimal]")
const output = document.querySelector("[data-output]")

let firstOperand = ""
let secondOperand = ""
let currOperation = null
let shouldResetScreen = false

window.addEventListener("keydown", setInput)
eqlBtn.addEventListener("click", evaluate)
clrBtn.addEventListener("click", reset)
dltBtn.addEventListener("click", deleteInput)
deciBtn.addEventListener("click", appendDecimal)

numBtn.forEach((button) =>
  button.addEventListener("click", () => appendNum(button.textContent))
)

operaBtn.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
)

function appendNum(num) {
  if (output.textContent === "0" || shouldResetScreen) resetScreen()
  output.textContent += num
}

function resetScreen() {
  output.textContent = ""
  shouldResetScreen = false
}

function reset() {
  output.textContent = "0"
  firstOperand = ""
  secondOperand = ""
  currOperation = null
}

function appendDecimal() {
  if (shouldResetScreen) resetScreen()
  if (output.textContent === "") screen.textContent = "0"
  if (output.textContent.includes(".")) return
  output.textContent += "."
}

function deleteInput() {
  output.textContent = output.textContent.toString().slice(0, -1)
}

function setOperation(operator) {
  if (currOperation !== null) evaluate()
  firstOperand = output.textContent
  currOperation = operator
  shouldResetScreen = true
}

function evaluate() {
  if (currOperation === null || shouldResetScreen) return
  if (currOperation === "÷" && output.textContent === "0") {
    alert("Dividing with 0 results to undefined!")
    reset()
    return
  }
  secondOperand = output.textContent
  output.textContent = roundResult(
    operate(currOperation, firstOperand, secondOperand)
  )
  currOperation = null
}

function roundResult(num) {
  return Math.round(num * 1000) / 1000
}

function setInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNum(e.key)
  if (e.key === ".") appendDecimal()
  if (e.key === "=" || e.key === "Enter") evaluate()
  if (e.key === "Backspace") deleteInput()
  if (e.key === "Escape") reset()
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    setOperation(convertOperator(e.key))
}

function convertOperator(keyBoardOperator) {
  if (keyBoardOperator === "/") return "÷"
  if (keyBoardOperator === "*") return "×"
  if (keyBoardOperator === "-") return "−"
  if (keyBoardOperator === "+") return "+"
}

function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case "+":
      return add(a, b)
    case "−":
      return substract(a, b)
    case "×":
      return multiply(a, b)
    case "÷":
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}
