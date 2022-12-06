// @wzm 2022-12-6
import _flatten from './_flatten.js';

// Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.
export default function flatten(array, depth) {
  return _flatten(array, depth, false);
}

/* 简单实现
function flatten(arr, shallow = false, array = []) {
	arr.forEach(item => {
		if (Array.isArray(item)) {
			if (shallow) {
				array.push(...item)
			} else {
				flatten(item, false, array)
			}
		} else {
			array.push(item)
		}
	})
	return array
}


*/
