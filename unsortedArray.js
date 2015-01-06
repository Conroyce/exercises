var unsortedArray = function(arr) {
  var sortArr = function(arra) {
    return arra.concat().sort(function(a,b) { return a-b; });
  }
  var sortedArr = sortArr(arr);
  var first = 0;
  var last = arr.length - 1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == sortedArr[i]) {
      console.log(first + " " + sortedArr + " " + arr)
      first = i;
    } else {
      break;
    }
  }
  for (var j = arr.length-1;j < arr.length; j--) {
    console.log(arr[j] + " " + sortedArr[j])
    if (arr[j] == sortedArr[j]) {
      console.log(last + " " + sortedArr + " " + arr)
      last = j;
    } else {
      break;
    }
  }
  return [first+1,last-1];
}