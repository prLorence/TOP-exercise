const removeFromArray = function(...notArray) {

    const myArray = notArray[0];
    const newArray = [];

    myArray.forEach((item) => {
        if (!notArray.includes(item)){
            newArray.push(item);
        }
    });

    return newArray;

}


module.exports = removeFromArray
