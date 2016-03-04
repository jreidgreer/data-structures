var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var node = Node(value);
    var currentHead = this.head;
    var currentTail = this.tail; 

    if (list.head === null) {
      this.head = node;
      this.tail = node;
    } else if (this.head !== null) {
      this.tail.next = node;
      this.tail = node;
    } 
  };

  list.removeHead = function() {
    if (this.head === null) {
      return;
    } 
    var result = this.head.value;
    this.head = this.head.next;
    return result;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    var result = false;
    
    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        result = true;
      }
      currentNode = currentNode.next;
    }
    if (currentNode.value === target) {
      result = true;
    }
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  //

  //

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
