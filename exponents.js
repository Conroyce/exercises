var exp = function(a,b) { //O(n) solution
  var x = 1;
  var ans = a;
  while(x < b) {
    ans *= a;
    x++;
  }
  return ans;
};

var exp = function(a,b) { //recurse solution
  if (b === 0) 
    return 1;
  else 
    return a * exp(a,b-1)  
};

