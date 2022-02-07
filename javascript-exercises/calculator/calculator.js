function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function sum(arr) {

	if (arr.length == 0) {
		return 0
	}

  let sum = arr.reduce((acc, curr) => {
    return acc + curr
  })

  return sum
}

function multiply(arr) {
  let multiply = arr.reduce((acc, curr) => {
    return acc * curr
  })

  return multiply
}

function power(a, b) {
  return Math.pow(a, b)
}

function factorial(a) {

	let factorial = 1;

  if (a === 0 || a === 1) {
    return 1
  }

  for (let i = 1; i <= a; i++) {
    factorial *= i
  }

	return factorial

}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
