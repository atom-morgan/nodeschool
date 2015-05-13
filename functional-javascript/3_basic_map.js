function doubleAll(numbers) {
  var result = [];
  numbers.map(function double(num) {
    result.push(num * 2); 
  });
  return result;
}

module.exports = doubleAll
