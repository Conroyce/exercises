var busStation = function(arr) {
  var len = arr.length;
  var ans = [];
  var sum = 0;
  arr.forEach(function(num) {
    sum += num;
  })
  for (var i = 1; i <= sum; i++) {
    var extra = 0;
    var set = 0;

    for (var j = 0; j < len; j++) {
      if (arr[j] > i) {
        break;
      } else if(arr[j] < i) {
        set+=arr[j];

        if (set > i) {
          break;
        } else if(set == i) {
          set = 0;
        } 
      }

      if (set == 0 && j == len-1) {
        ans.push(i);
      }  
    }
  }
  return ans;
};