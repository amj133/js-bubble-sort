function bubbleOnce(unsorted){
  current_index = 0;
  next_index = 1;
  current = unsorted[current_index];
  next = unsorted[next_index];
  while(unsorted[next_index] != undefined){
    if (current > next) {
      unsorted[next_index] = current;
      unsorted[current_index] = next;
    }
    current_index += 1;
    next_index += 1;
    current = unsorted[current_index]
    next = unsorted[next_index]
  }
  return unsorted
}

// function sort(unsorted){
//   sort_count = 0;
//   while(sort_count <= (unsorted.length - 1)){
//     var unsorted = bubbleOnce(unsorted);
//     sort_count += 1;
//   }
//   var sorted = unsorted;
//   return sorted;
// }

module.exports = bubbleOnce;
// module.exports = sort;
