// for conversion, we need two parameters, one for celsius and one for fahrenheit
// we need to round off to nearest tenths


const ftoc = function(fahr) {

  let unRounded = (fahr - 32) * (5 / 9);
  let rounded = Math.round(unRounded * 10) / 10;

  return rounded
} 

const ctof = function(cel) {
  let unRoundedC = cel * (9 / 5) + 32;
  let roundedC = Math.round(unRoundedC * 10) / 10;

  return roundedC
}

module.exports = {
  ftoc,
  ctof
}
