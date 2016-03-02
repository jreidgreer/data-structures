var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    return counter++;
  };

  someInstance.pop = function() {
    
    var target = storage[counter - 1];
    counter -= 1;
    delete storage[counter];
    return target;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
