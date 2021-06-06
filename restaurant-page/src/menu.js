function menuPage() {
  const menuContainer = document.createElement("div")
  menuContainer.classList.add("menu-container")

  menuContainer.appendChild(
    itemDesc(
      "fried_chicken",
      "$10",
      "Our best selling crispy juicy fried chicken"
    )
  )

  menuContainer.appendChild(
    itemDesc(
      "Fries",
      "$5",
      "Eating a burger without french fries is a mortal sin"
    )
  )

  menuContainer.appendChild(
    itemDesc(
      "juicy_burger",
      "$14",
      "Have the time to try our cooked-to-perfection burger"
    )
  )

  menuContainer.appendChild(
    itemDesc(
      "spaghetti",
      "$18",
      "Something delicious that will fill your belly"
    )
  )

  return menuContainer
}

function itemDesc(imageName, price, desc) {
  const menuItem = document.createElement("div")
  menuItem.classList.add("menu-item")

  const priceTag = document.createElement("h3")
  priceTag.classList.add("item-price")
  priceTag.setAttribute("id", "item-price")
  priceTag.textContent = price

  const description = document.createElement("p")
  description.classList.add("item-description")
  description.setAttribute("id", "item-description")
  description.textContent = desc

  const menuImage = document.createElement("img")
  menuImage.src = `./images/${imageName.toLowerCase()}.jpg`
  menuImage.classList.add("menu-image")

  menuItem.appendChild(menuImage)
  menuItem.appendChild(priceTag)
  menuItem.appendChild(description)

  return menuItem
}

function menu() {
  const main = document.getElementById("main")
  main.textContent = ""
  main.appendChild(menuPage())
}

export default menu
