var Tree = function(value) {
  this.root = new Node(value);
};

var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

Node.prototype.add = function(val) {
  var node = new Node(val);
  if (this.value > node.value) {
    this.left = node;
  } else if(this.value < node.value) {
    this.right = node;
  }
};

var createTree = function(arr) {
  var tree = new Tree(arr[0]);
  if (tree.root > arr[1]) {

  }
  for (var i = 3; i < arr.length; i++) {
    var node = new Node(arr[i]);
    while() {}
  }
};

var binarySearch = function(num) {

};

function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype = {

    //more code

    add: function(value){
        //create a new item object, place data in
        var node = {
                value: value,
                left: null,
                right: null
            },

            //used to traverse the structure
            current;

        //special case: no items in the tree yet
        if (this._root === null){
            this._root = node;
        } else {
            current = this._root;

            while(true){

                //if the new value is less than this node's value, go left
                if (value < current.value){

                    //if there's no left, then the new node belongs there
                    if (current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }

                //if the new value is greater than this node's value, go right
                } else if (value > current.value){

                    //if there's no right, then the new node belongs there
                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }       

                //if the new value is equal to the current one, just ignore
                } else {
                    break;
                }
            }
        }
    },

    //more code

};

