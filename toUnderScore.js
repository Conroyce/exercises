function toUnderscore(string) {
  if (typeof string === "number") {
    return string.toString();
  }
  
  string = string.split("");
  var ans = [];
  
  string.forEach(function(l,i) {
    if (l.toUpperCase() === l && isNaN(l)) {
      if (string[i-1]) {
        ans.push("_");
      }
      ans.push(l.toLowerCase());
    } else {
      if (l.toUpperCase() === l) {
        ans.push(l.toLowerCase());
      } else {
      
        ans.push(l);
      }     
    }
  });
  
  return ans.join("");
}