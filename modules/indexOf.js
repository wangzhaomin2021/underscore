// @wzm 2023-1-12
import sortedIndex from './sortedIndex.js';
import findIndex from './findIndex.js';
import createIndexFinder from './_createIndexFinder.js';

// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
export default createIndexFinder(1, findIndex, sortedIndex);

/*
function indexOf(array, value, beginIndex = 0) {
	const len = array.length
	if (beginIndex < 0 || beginIndex > len) beginIndex = 0
	for (let i = beginIndex; i < len; i++) {
		if (array[i] === value) return i
	}
	return -1
}
*/
