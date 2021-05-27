let playerOne = {
  name: "steve",
  marker: "X",
}

let playerTwo = {
  name: "jenn",
  marker: "O",
}

function Player(name, marker, hobby, message) {
  this.name = name,
  this.marker = marker,
  this.hobby = hobby
  this.sayWhat = function () {
    console.log(message)
  }
}

let player1 = new Player("paul", "Y", "video games")
let player2 = new Player ("paul", "Y", "video games", "wassup dawg")
console.log(player1.name)
player2.sayWhat()


function bookInfo(title, author, pages, status) {
  
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status 
  
  this.info = function () {
   return `${title} by ${author}, ${pages} pages, ${status}`
  }

}

function myInfo(name, age, location, likes) {
  this.name = name,
  this.age = age,
  this.location = location,
  this.likes = likes

  this.printAll = function () {
    return `Hello! My Name is ${name}, I'm ${age} years old, and I like ${likes}!`
  }
} 

function Plant() {
  this.country = "Philippines",
  this.isOrganic = true
}

Plant.prototype.showNameAndColor = function () {
  console.log("I am a " + this.name + " and my color is " + this.color)
}

Plant.prototype.amIOrganic = function () {
  if (this.isOrganic) {
    console.log("I am Organic, Baby!")
  }
}

function fruit (fruitName, fruitColor) {
  this.name = fruitName,
  this.color = fruitColor
}

fruit.prototype = Object.create(Plant.prototype)

const aBanana = new fruit ("Banana", "Yellow")

console.log(aBanana.showNameAndColor())

const myDesc = new myInfo("Paul", 18, "Marilao"," Javascript")
console.log(myDesc.printAll())
console.log(myDesc.prototype)



const theHobbit = new bookInfo("The Hobbit", "J.R.R Tolkien", "295", "not read yet")
console.log(theHobbit.info())


// types of data structures:

// linked lists = array components(nodes) are connected linearly
// stack = data are stacked on top of each other, it follows the LIFO (last in, last out) data flow
// queue = follows FIFO (first, first out) data flow
// object = has data fields, key part of OOP, it follows hierarchical taxonomy, created from a class
// O(n^2) n * n = compares all the numbers
// O(1) 1 = compares the first and last numbers
// O(2n) 2n = find the largest and smallest number

