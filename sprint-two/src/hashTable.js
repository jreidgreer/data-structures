var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var touple = Touple(k, v);

  if (!this._storage.get(index)) {
    var newBucket = Bucket();
    this._storage.set(index, newBucket);
  }

  var currentBucket = this._storage.get(index);

  currentBucket.set(currentBucket.findAvailibleIndex(), touple);
  this._storage.set(index, currentBucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  var result;

  currentBucket.each(function(touple) {
    if (touple.get(0) === k) {
      result = touple.get(1);
    }
  });

  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  var result;

  currentBucket.each(function(touple, bucketKey) {
    if (touple.get(0) === k) {
      currentBucket.set(bucketKey, undefined);
    }
  });
};

var Touple = function(key, value) {
  var newTouple = LimitedArray(2);
  newTouple.set(0, key); 
  newTouple.set(1, value);

  return newTouple;
};

var Bucket = function() {
  var newBucket = LimitedArray(8);

  newBucket.findAvailibleIndex = function() {
    var foundFree = false;
    var currentIndex = 0;

    while (!foundFree) {
      if (!this.get(currentIndex)) {
        foundFree = true;
      } else {
        currentIndex++;
      }
    }
    return currentIndex;
  };
  return newBucket;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


