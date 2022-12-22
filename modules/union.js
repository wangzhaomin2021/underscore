// @wzm 2022-12-22
import restArguments from './restArguments.js';
import uniq from './uniq.js';
import flatten from './_flatten.js';

// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
export default restArguments(function(arrays) {
  return uniq(flatten(arrays, true, true));
});

/*
function union(...args) {
	args.forEach(arr => {
		if (!Array.isArray(arr)) throw new Error('item of arguments must be type of array')
	})
	const set = new Set()
	for (let arr of args) {
		for (let v of arr) {
			set.add(v)
		}
	}
	
	return [...set]
}
*/
