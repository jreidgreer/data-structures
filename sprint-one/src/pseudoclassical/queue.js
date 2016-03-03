var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;

};


Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
  return this.counter - 1;
};

Queue.prototype.dequeue = function() {
  var targetKey = Object.keys(this.storage)[0];
  var val = this.storage[targetKey];
  delete this.storage[targetKey];
  return val;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

