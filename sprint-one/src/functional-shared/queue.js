var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0;
  obj.storage = {};

  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
  return this.counter - 1;
};

queueMethods.dequeue = function() {
  var targetKey = Object.keys(this.storage)[0];
  var val = this.storage[targetKey];
  delete this.storage[targetKey];
  return val;
};
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

