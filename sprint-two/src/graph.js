

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.storage = {};


};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = new GraphNode(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]){
    return true;
  } else{
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.storage[fromNode].edges[toNode]){
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges[toNode] = this.storage[toNode];
  this.storage[toNode].edges[fromNode] = this.storage[fromNode];
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(node);
  }
};

var GraphNode = function (val) {
  this.edges = {};
  this.val = val;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


