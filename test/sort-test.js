const assert = require('chai').assert;
const sort = require('../sort.js')

describe("bubble sort function", function() {
  it("organizes entire array", function(){
    assert.deepEqual([1, 2, 3, 4], sort([4, 2, 1, 3]));
    assert.deepEqual([1, 2, 3, 4, 5, 6, 7], sort([4, 2, 3, 1, 7, 5, 6]));
    assert.deepEqual(['a', 'b'], sort(['b', 'a']));
    assert.deepEqual(['a', 'b', 'c', 'd', 'e'], sort(['b', 'c', 'e', 'd', 'a']));
  })
})
