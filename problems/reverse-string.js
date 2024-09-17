module.exports = function reverseString(string) {

  if ((typeof string) !== 'string'){
    throw new TypeError("Requires a string!");
 } else if (string.length == 0){
    throw new TypeError("Requires a string!");
 }


  let reverseString = ""
  for (let i = string.length - 1; i >= 0; i--){
    reverseString += string[i];
  }

  return reverseString;
};
