const FactoryFunction = string => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction('poop');

// printString();
// capitalizeString(); 
// taco.capitalizeString(); 
taco.printString(); 

function myPet(whatKind) {
  return function petName(name) {
    console.log(`My pet is a ${whatKind}`)
    console.log(`His name is ${name}`)
  }
}

let myDog = myPet('Dog')
myDog('Milo')