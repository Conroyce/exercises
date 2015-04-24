// You have to write an algorithm that flatten an arrays structure to 2 levels. 
// It means that each array under the second level will be merge to its parent. 
// Only two levels are kept.

var flatten = function(arr) {
  if(Array.isArray(arr)) {
    var out = [];
    arr.forEach(function(v) {
      if(Array.isArray(v)) out = out.concat(flatten(v));
      else out = out.concat(v);
    });
    return out;
  } else return arr;
};

var flattenTwoLevels = function(arr) {
  var out = [];
  arr.forEach(function(v) {
    out.push(flatten(v));
  });
  return out;
};