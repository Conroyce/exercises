String.prototype.forEach = function(func) {
  str = this.split("");
  for (var i = 0; i < str.length; i++) {
    func(str[i]);
  }
};

String.prototype.filter = function(func) {
  str = this.split("");
  var ans = [];
  str.forEach(function(x) {
    if (func(x)) {
      ans.push(x);
    };
  });
  return ans;
};

String.prototype.map = function(func) { 
  var str = this.split("");
  var ans = [];
  str.forEach(function(x) {
    ans.push(func(x));
  });
  return ans;
};

String.prototype.unshift = function(l) {
  return l+this;
};

Object.prototype.toString = function() {
  var keys = Object.keys(this);
  var values = [];
  keys.forEach(function(x) {
    values.push(this[x]);
  },this);
  console.log(values);
  var cnt = 0;
  while (cnt < keys.length) {
    
  }
};