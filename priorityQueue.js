var Node = function(value) {
  this.value = value;
  this.depth = 1;
  this.complete = true;
  this.left = undefined;
  this.right = undefined;
};

var Tree = function(value) {
  var node = new Node(value);
  this.root = node;
};

Tree.prototype.addNode = function(value) {
  var node = new Node(value);

};