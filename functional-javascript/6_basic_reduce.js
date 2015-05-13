function countWords(inputWords) {
  return inputWords.reduce(function(countObj, val) {
    countObj[val] = ++countObj[val] || 1;
    return countObj;
  }, {});
}

module.exports = countWords
