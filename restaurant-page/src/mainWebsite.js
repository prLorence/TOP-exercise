// create the header with the navigations first
// then the textContent
//
import home from "./home"

function createHeader() {
  const header = document.createElement("header")
  header.classList.add("header")

  const createH1 = document.createElement("h1")
  createH1.textContent = "Odelish!"

  header.appendChild(createH1)
  header.appendChild(createNav())

  return header
}

function createNav() {
  const navBar = document.createElement("nav")

  const homeBtn = document.createElement("button")
  homeBtn.classList.add("nav-button")
  homeBtn.textContent = "Home"
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return
    activeButton(homeBtn)
    home()
  })

  const menuBtn = document.createElement("button")
  menuBtn.classList.add("nav-button")
  menuBtn.textContent = "Menu"
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return
    activeButton(menuBtn)
    menu()
  })

  const contactBtn = document.createElement("button")
  contactBtn.classList.add("nav-button")
  contactBtn.textContent = "Contact"
  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return
    activeButton(contactBtn)
    contact()
  })

  navBar.appendChild(homeBtn)
  navBar.appendChild(menuBtn)
  navBar.appendChild(contactBtn)

  return navBar
}

function activeButton(button) {
  const allButtons = document.querySelectorAll(".nav-button")

  allButtons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active")
    }
  })
  button.classList.add("active")
}

function createMain() {
  const main = document.createElement("main")
  main.classList.add("main")
  main.setAttribute("id", "main")
  return main
}

function loadWebsite() {
  const content = document.getElementById("content")

  content.appendChild(createHeader())
  content.appendChild(createMain())

  activeButton(document.querySelector(".nav-button"))
  home()
}

export default loadWebsite
