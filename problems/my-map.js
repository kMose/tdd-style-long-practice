function myMap(inputArray, callback) {
  let result = [];

  inputArray.forEach((element) =>{
    result.push(callback(element))
  })

  return result;
}

module.exports = myMap;
