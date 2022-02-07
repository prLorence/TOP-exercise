const findTheOldest = function(arr) {
  return arr.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
    return oldestAge < currentAge ? current : oldest
  })
}

const getAge = (born, died) => {
  if (!died) {
    died = new Date().getFullYear()
  }
  return died - born
}

module.exports = findTheOldest
