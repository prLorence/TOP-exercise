// variables for event handlers
const prompt = document.getElementById("prompt")

const darkModeBtn = document.querySelector("#darkMode")

const addBtn = document.querySelector("#addButton")

const closeWindow = document.getElementsByClassName("closeWindow")[0]

const addNewBook = document.querySelector("#submitBtn")

// event click functions
addBtn.addEventListener("click", () => {
  prompt.style.display = "block"
})

closeWindow.addEventListener("click", () => {
  prompt.style.display = "none"
})

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    prompt.style.display = "none"
  }
})

addNewBook.addEventListener("click", bookDetails)
darkModeBtn.addEventListener("click", darkMode)

class book {
  constructor(title, author, pages, read) {
    ;(this.title = form.title.value),
      (this.author = form.author.value),
      (this.pages = form.pages.value),
      (this.read = form.read.checked)
  }
}

let myShelf = []
let newBook
