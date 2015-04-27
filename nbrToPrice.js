// Numbers should use the standard comma for every 3 numbers and dot 
// to separate the cents, cents need to be truncated to 2 decimals, 
// in the case that the decimal part of the number is 1 character long or 
// none you should add 0's so that the result will always have 2 decimal characters, 
// the function will also evaluate negative numbers.

var numberToPrice = function(number) {
  // Is not a number or empty string?
  if (isNaN(number) || number == "") { return 'NaN'; }
  var cents = number.toString().split('.')[1]
  var dollars = number.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Has cents?
  if (cents != null) { 
    cents = cents.split('').slice(0,2).join('');
    if (cents.length < 2) { cents = cents + 0; }
   } else { 
    cents = "00"; 
   }
    
  return dollars + "." + cents
}