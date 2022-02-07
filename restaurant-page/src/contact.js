function contactPage() {
  const contactContainer = document.createElement("div")
  contactContainer.classList.add("contact-container")

  contactContainer.appendChild(
    location("987 654 321", "2182  High Meadow Lane", "location")
  )

  return contactContainer
}

function location(phone, address, photo) {
  const locationContainer = document.createElement("div")
  locationContainer.classList.add("location-container")

  const phoneNum = document.createElement("p")
  phoneNum.textContent = `Phone: ${phone}`
  phoneNum.classList.add("address")

  const completeAddress = document.createElement("p")
  completeAddress.textContent = `Address: ${address}`
  completeAddress.classList.add("address")

  const locationPhoto = document.createElement("img")
  locationPhoto.src = `./images/${photo.toLowerCase()}.png`
  locationPhoto.classList.add("location-photo")

  locationContainer.appendChild(phoneNum)
  locationContainer.appendChild(completeAddress)
  locationContainer.appendChild(locationPhoto)

  return locationContainer
}

function contact() {
  const main = document.getElementById("main")
  main.textContent = ""
  main.appendChild(contactPage())
}

export default contact
