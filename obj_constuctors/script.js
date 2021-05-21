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

