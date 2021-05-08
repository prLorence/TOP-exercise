// if years are divisible by 4, return true
// if years are divisible by 4 AND 400, return true
// if years are divisible by 100 but not 4, return false
// else return false


const leapYears = function(yearVal) {

  if (yearVal % 4 == 0 && yearVal % 100 !== 0 || yearVal % 400 === 0) {
    return true;
  } else {
    return false
  }
 


} 

module.exports = leapYears
