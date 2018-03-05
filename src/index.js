module.exports = function longestConsecutiveLength(array) {
 let num = array;
 let set = num.slice();
 let max = 1;
 let len = num.length;
 let prevCurrent, current, count;

  if (len == 0) {
    return 0;
  }

  for (var i=len; i--;) {
	  prevCurrent = num[i] - 1;
	  if (set.indexOf(prevCurrent)) {
	    current = num[i];
		  count = 1;
		
		while(set.indexOf(current+1) != -1) {
		  current++;
		  count++;
		}
		max = Math.max(count, max);
	  }
	}
  return max;
}
