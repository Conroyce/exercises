var bracketMatch = function(str) {
  var brackets = [];
  var par = [];
  str = str.split("");
  str.forEach(function(x) {
    if (x == "{" || x == "}" ) {
      brackets.push(x);
    } else if (x == "(" || x == ")") {
      par.push(x)
    }
  });
  console.log(brackets + " break " + par + " break " );
  if (brackets[0] == "}" || brackets.length % 2 !== 0 || brackets.length == 0) {
    return false;
  } else if (par[0] == ")" || par.length % 2 !== 0 || par.length == 0) {
    return false;
  }  else {
    return true;
  }
};















