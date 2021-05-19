// check if

const clean = (str) => str.toLowerCase().replace(/[\W_]/g, "")

const palindromes = function (str) {
  const wordSet = clean(str)

  return wordSet.split("").reduce((match, acc, curr) => {
    if (!match) {
      return false
    }

    return acc === wordSet[wordSet.length - 1 - curr]
  }, true)
}
module.exports = palindromes
