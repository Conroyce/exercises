var Node = function(value){
  this.value = value;
  this.children = [];
}

Node.prototype.isLeaf = function() {
  return this.children.length === 0; 
};

Node.prototype.add = function(node) {
  var child = new Node(node);
  this.children.push(child);
  return this;
}

var Tree = function(value){
  this.root = new Node(value);
}

var getTestTree = function() {
  var tree = new Tree(2);
  var root = tree.root;
  var lvl1 = root.add(7).add(5);
  var node7 = lvl1.children[0];

  node7.add(2).add(6).children[1].add(5).add(11);

  var node5 = lvl1.children[1];
  node5.add(9).children[0].add(4);

  return tree;
}

var tree = getTestTree();

var search = function(tree,target) {
  _search(tree.root,target);
};

var _search = function(node,target) {
  if (node.value === target) {
    console.log("found it!")
  }

  node.children.forEach(function(child) {
    _search(child,target)
  });
};

var breadthFirstPrint = function(tree){
  var root = tree.root;
  var queue = [root];
  while(queue.length){
    var node = queue.shift();
    var value = node.value;
    if(!node.isLeaf()){
      var children = node.children;
      var length = children.length;
      for(var i = 0; i < length; i++){
        var child = children[i];
        queue.push(child);
      }
    }
    if(node.value === value){
      console.log('Num found: ' + value);
    }
  }
};

var _breadthFirst = function(arr) {
  arr.forEach(function(el) {

    if(el.children.length > 0) {

      el.children.forEach(function(child) {
        arr.push(child);
        console.log(arr.pop);
      });
    }  
    // console.log()
    _breadthFirst(el);
  });
  
};

