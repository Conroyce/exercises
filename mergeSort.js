var sortAlg = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var switched = arr.splice(j,1,arr[i]);
        arr[i] = switched[0];
      }
    }
  }
  return arr;
};


var mergeSort = function(arr) {
  var arr1 = arr.splice(0,arr.length/2);  
  arr1 = sortAlg(arr1);
  var arr2 = sortAlg(arr);
  console.log(arr1+" "+arr2);
  var res = [];

  while() {
    //need to do while loop or recursive function 
  }

  // for (var i = 0; i < arr1.length; i++) {
  //   for(var j = 0; j < arr2.length; j++) {
  //     if (arr1[i] > arr2[j]) {
  //       res.push(arr2[j]);
  //       j++;
  //     } else {
  //       res.push(arr1[i]);
  //       i++;
  //     }
  //   }
  // }
};