var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;
  var counter2 = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
    return counter - 1;
  };

  someInstance.dequeue = function() {
    // Object.keys(storage)[0]
    var targetKey = Object.keys(storage)[0];
    var val = storage[targetKey];
    delete storage[targetKey];

    /*
        Teh other way
        var target = storage[Object.keys(storage)[0]];
    */
    return val;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
