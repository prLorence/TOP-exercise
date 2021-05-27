// variables for event handlers
const prompt = document.getElementById("prompt")

const darkModeBtn = document.querySelector("#darkMode")

const addBtn = document.querySelector("#addButton")

const closeWindow = document.getElementsByClassName("closeWindow")[0]

const addNewBook = document.querySelector("#submitBtn")

const shelf = document.querySelector("div.shelf")

// event click functions
addBtn.addEventListener("click", () => {
  prompt.style.display = "block"
})

closeWindow.addEventListener("click", () => {
  prompt.style.display = "none"
})

window.addEventListener("click", () => {
  if (event.target == prompt) {
    prompt.style.display = "none"
  }
})

addNewBook.addEventListener("click", addBookToLibrary)

class Book {
  constructor(title, author, pages, read) {
    ;(this.title = form.title.value),
      (this.author = form.author.value),
      (this.pages = form.pages.value),
      (this.read = form.read.checked)
  }
}

let myShelf = []
let newBook

// function loop and display it to the card

function addBookToLibrary() {
  event.preventDefault()
  prompt.style.display = "none"

  newBook = new Book(title, author, pages, read)
  myShelf.push(newBook)
  render()
  form.reset()
}

// render function that display the details of the book

function render() {
  const display = document.getElementById("shelf")
  const books = document.querySelectorAll(".book")
  books.forEach((book) => display.removeChild(book))

  for (let i = 0; i < myShelf.length; i++) {
    createBook(myShelf[i])
  }
}

// DOM elements scripts

function createBook(item) {
  const shelf = document.querySelector("#shelf")
  const bookDiv = document.createElement("div")
  const titleDiv = document.createElement("div")
  const authDiv = document.createElement("div")
  const pageDiv = document.createElement("div")
  const removeBtn = document.createElement("button")
  const readBtn = document.createElement("button")

  bookDiv.classList.add("book")
  bookDiv.setAttribute("id", myShelf.indexOf(item))

  titleDiv.textContent = item.title
  titleDiv.classList.add("title")
  bookDiv.appendChild(titleDiv)

  authDiv.textContent = item.author
  authDiv.classList.add("author")
  bookDiv.appendChild(authDiv)

  pageDiv.textContent = item.pages
  pageDiv.classList.add("pages")
  bookDiv.appendChild(pageDiv)

  readBtn.classList.add("readBtn")
  bookDiv.appendChild(readBtn)
  if (item.read === false) {
    readBtn.textContent = "Not Read"
    readBtn.style.backgroundColor = "red"
  } else {
    readBtn.textContent = "Read"
    readBtn.style.backgroundColor = "green"
  }

  removeBtn.textContent = "Remove"
  removeBtn.setAttribute("id", "removeBtn")
  bookDiv.appendChild(removeBtn)

  shelf.appendChild(bookDiv)

  removeBtn.addEventListener("click", () => {
    myShelf.splice(myShelf.indexOf(item), 1)
    render()
  })

  readBtn.addEventListener("click", () => {
    item.read = !item.read
    render()
  })
}
