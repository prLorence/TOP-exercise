// create an empty array
// filter out the titles
// push the titles inside the array
// return array

const getTheTitles = function (books) {

  return books.map(book =>  book.title)
  
}

module.exports = getTheTitles
