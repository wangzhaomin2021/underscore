// @wzm 2023-1-10
import restArguments from './restArguments.js';
import difference from './difference.js';

// Return a version of the array that does not contain the specified value(s).
export default restArguments(function(array, otherArrays) {
  return difference(array, otherArrays);
});

/*
function without(arr, ...values) {
	const result = []
	arr.forEach(v => {
		if (!values.includes(v)) {
			result.push(v)
		}
	})
	return result
}
*/
