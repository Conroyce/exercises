  //print out first arr
  //on last increment of arr, print last element of each subsequent array.
  //if last array is reached, print out array from last to first
  //when first is reached
  //print first element of previous arrays until we reach the first
  //keep var that stores outer edges
var objCreate = function(matrix) {
  var matObj = {};
  var alph = ["a","b","c","d","e"];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      var key = alph[i+1] + j;
      matObj[key] = matrix[i][j];
    }
  }
  return matObj;
};

var spiralTraversal = function(matrix) {
  var obj = objCreate(matrix),
      ans = [],
      x = 0;

  while(x < matrix.length) {
    ans.push()
  }

  return ans;
};