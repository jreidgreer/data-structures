var BinarySearchTree = function(value) {
  var tree = Object.create(binarySearchTree);

  tree.value = value;
  tree.left = null;
  tree.right = null;     

  return tree;
};

var binarySearchTree = {};

binarySearchTree.insert = function(val) {
  var direction;
  var newTree = BinarySearchTree(val);

  if ( val <= this.value ) {
    direction = 'left';
  } else {
    direction = 'right';
  }

  if ( this[direction] === null) {
    this[direction] = newTree;
  } else {
    this[direction].insert(val);
  }
};

binarySearchTree.contains = function(target) {
  var doesContain = false;
  

  if ( this.value === target ) {
    doesContain = true;
  }

  if (this.left) {
    if (this.left.contains(target)) {
      doesContain = true;
    }  
  }

  if (this.right) {
    if (this.right.contains(target)) {
      doesContain = true;
    }  
  }

  return doesContain;

};

binarySearchTree.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  } 

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

 // O (log (n))
