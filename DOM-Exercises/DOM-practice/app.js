const container = document.querySelector("#container")

const content = document.createElement("div")
content.classList.add("content")
content.textContent = "This is the glorious text-content!"

const redText = document.createElement("p")
redText.classList.add("redText")
redText.textContent = "Hey I'm red!"
redText.style.cssText = "color: red;"

const blueH3 = document.createElement("h3")
blueH3.classList.add("blueH3")
blueH3.textContent = "I'm a blue h3!"
blueH3.style.cssText = "color: blue;"

const blackDiv = document.createElement("div")
blackDiv.classList.add("black")
blackDiv.style = "background-color: pink; border: 1px solid black"

const h1InADiv = document.createElement("h1")
h1InADiv.classList.add("h1Style")
h1InADiv.textContent = "I'm in a div!"

const pInADiv = document.createElement("p")
pInADiv.classList.add("pStyle")
pInADiv.textContent = "Me too!"

container.appendChild(content)
container.appendChild(redText)
container.appendChild(blueH3)
container.appendChild(blackDiv)
blackDiv.appendChild(h1InADiv)
blackDiv.appendChild(pInADiv)
