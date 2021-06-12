// this snippet demonstrates the uses of closures: private functions

function counter () {
  let count = 0;

 return function () {
    count++;
    return count;
  }
}

let countVal = counter()

document.addEventListener("click", () => {
  console.log(countVal());
})


