var maxDeviation = function(arr,n) {
  var ans = 0;
  console.log(arr+"<-array")
  
  for (var i = 0; i <= (arr.length-n); i++) {
    var res = arr.slice(i,n+i);
    var sorted = res.concat().sort(function(a,b) {return a-b;});
    console.log(res+"<-res");
    if (sorted[n-1]-sorted[0] > ans) {
      ans = sorted[n-1]-sorted[0];
    }
  }
  
  console.log(ans+"<-ans");
  return ans;
};