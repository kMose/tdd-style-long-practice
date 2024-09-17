function returnsThree() {
  return 3;
}

function reciprocal(n) {

  if((typeof n) != 'number'){
    throw new TypeError("Invalid Input. Requires Number");
  }
  if (n >= 1000000 || n <= 0)
    throw new RangeError("Ranges are between 1 and 1,000,000");



  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};
