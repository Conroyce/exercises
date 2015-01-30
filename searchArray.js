var searchArray = function(arr,num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    } else if(i == arr.length-1) {
      return -1;
    }
  }
};

