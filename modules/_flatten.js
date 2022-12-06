// @wzm 2022-12-6
import getLength from './_getLength.js';
import isArrayLike from './_isArrayLike.js';
import isArray from './isArray.js';
import isArguments from './isArguments.js';

// Internal implementation of a recursive `flatten` function.
export default function flatten(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i = 0, length = getLength(input); i < length; i++) {
    var value = input[i];
    if (isArrayLike(value) && (isArray(value) || isArguments(value))) {
      // Flatten current level of array or arguments object.
      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;  // 更新局部idx
      } else {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}

/* 简单实现
function flatten(arr, depth = 1, array = []) {
	arr.forEach(item => {
		if (Array.isArray(item)) {
			if (depth === 1) {
				array.push(...item)
			} else {
				flatten(item, depth - 1, array)
			}
		} else {
			array.push(item)
		}
	})
	return array
}
*/
