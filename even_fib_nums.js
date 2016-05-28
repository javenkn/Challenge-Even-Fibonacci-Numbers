/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var prevNumber = 0;
  var currNumber = 1;
  var nextNumber = 1;
  // do your work here
  while(prevNumber <= maxFibValue){
    if(prevNumber % 2 === 0){
      sum = sum + prevNumber;
    }
    prevNumber = currNumber;
    currNumber = nextNumber;
    nextNumber = currNumber + prevNumber;
  }
  console.log(sum);
  return sum;
}
// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;
  var prevNumber = 0;
  var currNumber = 1;
  var nextNumber = 1;
  //define your base case, validate your input


  //do your work here
  while(prevNumber < maxFibValue){
      highest = prevNumber;
      prevNumber = currNumber;
      currNumber = nextNumber;
      nextNumber = currNumber + prevNumber;
  }
  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};