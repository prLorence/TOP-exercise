let myObj = {
  firstName: "Paul",
  lastName: "Reyes",
  // isHuman: console.log(true),
  myFunc () {
    console.log("hello")
  }
}

let myOtherObj = {
  hello: "hi",
  hobby: "programming",
  __proto__: myObj
}

let myLikes = {

  love () {
    if (!this.iDoNot) {
      console.log("nooooo")
    }
  },

  yesLove () {
    this.iDoNot = true
  }

  
}

let mySelf = {
  name: "Paul",
  __proto__: myLikes
}

mySelf.love()

console.log(mySelf.love)


myOtherObj.myFunc()
