var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  var name = "node";
  var counter = 0;
 

  list.addToTail = function(value) {
    // Declare variable that initates Node
    var node = this['node' + counter] = new Node(value);

    //list.variable = variable;

    //Do we have a list.head?
    if (this.tail === null) {
      //If not, list.head == list.variable
      this.tail = node;


    } else {
      //Set list.variable.next = list.tail
      
    }



    // Set list.tail to list.variable
    counter++;
  };

  list.removeHead = function() {

  };

  list.contains = function(target) {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
