class Greet {
  constructor(name, message) {
    this.message = message
    this.name = name
  }

  greetEveryone() {
    const { name, message } = this
    return `${message}! My name is ${name}`
  }
}



let paulGreet = new Greet("Paul", "Hello")
console.log(paulGreet.greetEveryone())

class Color {
  constructor (r, g, b) {
    this.r = r
    this.g = g
    this.b = b
  }
  displayColor () {
    const {r, g, b} = this
    return `rgb(${r}, ${g}, ${b})`
  }
}

const c1 = new Color (255, 255, 255)
console.log(c1.displayColor())
