module.exports = function longestConsecutiveLength(array) {
  let max = 1;
  let len = array.length;
  let current, count;
 
  if (len == 0) { return 0; }

  let map = new Map();
  
  for (let i = 0; i < len; i++) {
    map.set(array[i], null);
  }

  for (let [key, value] of map) {
  
    if (!map.has(key - 1)) {
      count = 1;
      current = key;
      while (map.has(++current)) {
        count++;
      }
      max = Math.max(count, max);
    }
  }
 return  max;
}
