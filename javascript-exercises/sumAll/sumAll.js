const sumAll = function(a, b) {

  let min = Math.min(a, b),
      max = Math.max(a, b);
  
  let equation = (max - min + 1) * (max + min) / 2;

    if (!Number.isInteger(min) || !Number.isInteger(max) || Array.isArray(b) || typeof b === 'string'){
      return 'ERROR';
    } else if (min < 0 || max < 0) {
      return 'ERROR';
    } 

   return equation
    

  
}

module.exports = sumAll
