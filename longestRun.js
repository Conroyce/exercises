var longestRun = function(str) {
  var check = {start:0, end:0};
  var ans = {start:0, end:0};
  str = str.split("");
  str.forEach(function(v,i) {
    if (v === str[i-1]) {
      check.end++;
    } else {
      if (check.end-check.start > ans.end-ans.start) {
        ans.start = check.start;
        ans.end = check.end;
      } 
      check = {start: i, end: i};
    }
  });
  return [ans.start,ans.end];
};