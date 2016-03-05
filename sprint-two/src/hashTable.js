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
    if (touple) {
      if (touple.get(0) === k) {
        result = touple.get(1);
      }
    }
  });

  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);

  currentBucket.each(function(touple, bucketKey) {
    console.log('Does the touple have a key that matches? ' + touple.get(0) + bucketKey);
    if (touple.get(0) === k) {
      currentBucket.set(bucketKey, undefined);
    }
  });

  this._storage.set(index, currentBucket); 
  console.log('This is the new bucket.', this._storage.get(index));
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


