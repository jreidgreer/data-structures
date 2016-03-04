var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);

  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var result = false;

  var searchTree = function(tree) {
    if (tree.value === target) {
      result = true;
    }

    for (var i = 0; i < tree.children.length; i++) {
      searchTree(tree.children[i]);
    }
  };

  searchTree(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
