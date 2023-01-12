// @wzm 2023-1-12
import group from './_group.js';
import has from './_has.js';

// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
export default group(function(result, value, key) {
  if (has(result, key)) result[key]++; else result[key] = 1;
});

/*
function countBy(list, iteratee, context) {
	const ret = {}
	if (context && typeof iteratee === 'function') iteratee = iteratee.bind(content)
	const type = typeof iteratee === 'string' ? 'string' : typeof iteratee === 'function' ? 'function' : 'error'
	if (type === 'error') return list
	const iter = type === 'string' ? (item) => item[iteratee] : iteratee  // 统一迭代器
	
	list.forEach((item, index, ctx) => {
		const r = iter(item, index, ctx)
		if (!ret[r]) ret[r] = 1
		else ret[r] += 1
	})
	
	return ret
}
*/
