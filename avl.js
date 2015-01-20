var AVLTree = function(n, attr) {
  this.init(n,attr);
};

AVLTree.prototype.init = function(n, attr) {
  this.attr = attr;
  this.left = null;
  this.right = null;
  this.depth = 1;
  this.node = n;
  this.elements = [n];
};

AVLTree.prototype.balance = function() {
  var ldepth = this.left == null ? 0 : this.left.depth;
  var rdepth = this.right == null ? 0 : this.right.depth;

  if (ldepth > rdepth + 1) {
    //LR or LL rotation
    var lldepth = this.left.left.depth == null ? 0 : this.left.left.depth;
    var lrdepth = this.left.right.depth == null ? 0 : this.left.right.depth;

    if (lldepth < lrdepth) {
      // LR rotation consists of a RR rotation of the left child
      this.left.rotateRR();
      // plus a LL rotation of this node, which happens anyway
    }
    this.rotateLL();
  } else if (ldepth + 1 < rdepth) {
        // RR or RL rorarion
        var rrdepth = this.right.right == null ? 0 : this.right.right.depth;
        var rldepth = this.right.left  == null ? 0 : this.right.left.depth;
 
        if (rldepth > rrdepth) {
            // RR rotation consists of a LL rotation of the right child
            this.right.rotateLL();
            // plus a RR rotation of this node, which happens anyway
        }
        this.rotateRR();
  }
};

AVLTree.prototype.rotateLL = function() {
  // the left side is too long => rotate from the left (_not_ leftwards)
  this.elementsBefore = this.elements
};
