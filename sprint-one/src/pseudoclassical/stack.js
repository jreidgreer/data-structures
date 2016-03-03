var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  return this.counter++;
};

Stack.prototype.pop = function() {
  var target = this.storage[this.counter - 1];
  this.counter -= 1;
  delete this.storage[this.counter];
  return target;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


