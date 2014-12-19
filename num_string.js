var num_string = function(str) {
  var num = ["0","1","2","3","4","5","6","7","8","9"];
  str = str.split("");
  if (str[str.length-1] === "9") {
      var counter = 1;
      var i = str.length-1;
      while (str[i] == "9") {
        counter++;
        i--;
      }
      return counter;
    
  } else {
    var res = str.pop();
    for (var k = 0; k < num.length; k++) {
      if (res == num[k]) {
        str.push(num[k+1]);
      }
    }
  }
  return str.join("");
};