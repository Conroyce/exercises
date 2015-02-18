var bind = function() {
  console.log(arguments[0])
  // var _this = this;
  console.log(_this)
  // var clone = object.create({name: obj.name, func: _this})
}


var alice = {
  name: 'alice',
  shout: function() {
    alert(this.name);
  }
}