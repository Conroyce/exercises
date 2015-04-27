// Write a method that takes a maximum bound and returns all primes starting 
// with 0 up-to and including the maximum bound.

var prime = function(num) {
  // Generate an array containing every prime number between 0 and the num specified (inclusive)
  // create function that check for primes
  // iterate throught from 2 to num, calling function with each iteration
  // return answer as array
  var ans = [];  
  var isPrime = function(n) {
    // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (var j = 2; j <= num; j++) {
    if (isPrime(j)) {
      ans.push(j);
    }
  }
  
  return ans;
};