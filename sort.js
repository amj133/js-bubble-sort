const bubbleOnce = require('./bubbleOnce.js')

function sort(unsorted){
  sort_count = 0;
  while(sort_count <= (unsorted.length - 1)){
    var unsorted = bubbleOnce(unsorted);
    sort_count += 1;
  }
  var sorted = unsorted;
  return sorted;
}

module.exports = sort;
