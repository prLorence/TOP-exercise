function homePage() {
  const homeContainer = document.createElement("div")
  homeContainer.classList.add("content")

  const landingPhoto = document.createElement("img")
  landingPhoto.src = "./images/burger.jpg"
  landingPhoto.setAttribute("alt", "a delicious burger")
  landingPhoto.classList.add("landing-photo")

  homeContainer.appendChild(tagLine("Food at"))
  homeContainer.appendChild(tagLine("Your Fingertips"))
  homeContainer.appendChild(landingPhoto)

  return homeContainer
}

function tagLine(message) {
  const heroTitle = document.createElement("h2")
  heroTitle.classList.add("tagline")
  heroTitle.setAttribute("id", "tagline")

  heroTitle.textContent = message
  return heroTitle
}

function home() {
  const main = document.getElementById("main")
  main.textContent = ""
  main.appendChild(homePage())
}

export default home
