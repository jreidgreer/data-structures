var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};

  obj.storage = {};
  obj.counter = 0;

  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  return this.counter++;
};

stackMethods.pop = function() {
  var target = this.storage[this.counter - 1];
  this.counter -= 1;
  delete this.storage[this.counter];
  return target;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
