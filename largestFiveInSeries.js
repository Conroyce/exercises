// Complete the solution so that it returns the largest five digit number 
// found within within the number given.. The number will be passed in as a 
// string of only digits. It should return a five digit integer. The number 
// passed may be as large as 1000 digits.

function solution(digits){
  var ans = parseInt(digits.substr(0,5));
  for (var i = 1; i < digits.length-4; i++) {
    if (parseInt(digits.substr(i,5)) > ans) {
      ans = parseInt(digits.substr(i,5));
    }
  }
  
  return ans;
}  