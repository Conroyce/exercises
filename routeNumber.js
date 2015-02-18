[down,down,right,right]
[down,right,down,right]
[down,right,right,down]
[right,down,right,down]
[right,down,down,right]
[right,right,down,down]

[0,0,1,1]
[0,1,1,0]
[1,1,0,0]
[1,0,1,0]
[1,0,0,1]
[0,1,0,1]

var Node = function(value) {
  this.value = value;
}

var grid = function(area) {
  var moves = {
    down: [],
    right: []
  }

  for (var i = 0; i < area; i++) {
    moves.down.push(true);
    moves.right.push(true);
  }

  return moves;
};

var init = function(area) {
  var moves = grid(area);
  var paths = 0;

  var processNode = function(node, downMoves, rightMoves) {
    //no more paths found, add path
    console.log(node)
    console.log(downMoves,rightMoves)
    console.log(paths)
    if (!downMoves.length && !rightMoves.length) {
      paths++;
      return node;
    }

    if (downMoves.length) {
      //copies the downMoves array
      var downClone = downMoves.slice();
      node.left = processNode(new Node(downClone.pop()), downClone, rightMoves)
    }

    if (rightMoves.length) {
      //copy rightMoves array
      var rightClone = rightMoves.slice();
      node.right = processNode(new Node(rightClone.pop()), downMoves, rightClone)
    }
    return node;
  }

  var tree = processNode(new Node(0), moves.down, moves.right);

  console.log(tree);
  console.log(paths);
}

