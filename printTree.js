var Node = function(value){
 this.value = value;
};

Node.prototype.insert = function(value){
 var nodeValue = this.value;
 if(value > nodeValue){
   if(this.right){
     return this.right.insert(value);
   }
   else{
     this.right = new Node(value);
     return this.right;
   }
 }
 else if(value < nodeValue){
   if(this.left){
     return this.left.insert(value);
   }
   else{
     this.left = new Node(value);
     return this.left;
   }
 }
};

var BinaryTree = function(value){
 this.root = new Node(value);
};

BinaryTree.prototype.insert = function(value){
 var node = this.root;
 node = node.insert(value);
};

BinaryTree.prototype.search = function(value){
 var node = this.root;
 while(node){
   var nodeValue = node.value;
   if(value > nodeValue){
     node = node.right;
   }
   else if(value < nodeValue){
     node = node.left;
   }
   else{
     return true;
   }
   if(!node){
     return false;
   }
 }
};

var inOrder = function(root) {
  var ans = [root];
  var current = [root];
    for (var i = 0; i < current.length; i++) {
      while(current[i].left || current[i].right) {
        if (current[i].left) {
          ans.push(current[i].left);
          current.push(current[i].left);
        } else if(current[i].right) {
          ans.push(current[i].right)
          current.push(current[i].right);
        }  
      }  
      current.shift();
    }   
  return ans;  
}

var tree = new BinaryTree(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(17);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(8);
tree.insert(11);
tree.insert(13);
tree.insert(16);
tree.insert(18);

//expect inOrder(tree.root) === 1 => 18