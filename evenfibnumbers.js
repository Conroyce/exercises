var fibonacci = function(n) {
  var ans = [0,1];
  var evens = [];

  if (n <= 2) return 1;

  for (var i = 2; i <= n; i++) {
    ans.push(ans[i-1] + ans[i - 2]);
    if (ans[i] % 2 === 0) {
      evens.push(ans[i]);
    }
  }

  return evens;
};