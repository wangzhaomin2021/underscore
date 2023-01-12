// @wzm 2023-1-12
import cb from './_cb.js';
import each from './each.js';

// An internal function used for aggregate "group by" operations.
export default function group(behavior, partition) {
  return function(obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = cb(iteratee, context);
    each(obj, function(value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
}

/*
function groupBy(list, iteratee, context) {
	const ret = {}
	if (context && typeof iteratee === 'function') iteratee = iteratee.bind(content)
	const type = typeof iteratee === 'string' ? 'string' : typeof iteratee === 'function' ? 'function' : 'error'
	if (type === 'error') return list
	const iter = type === 'string' ? (item) => item[iteratee] : iteratee  // 统一迭代器
	
	list.forEach((item, index, ctx) => {
		const r = iter(item, index, ctx)
		if (!ret[r]) ret[r] = [item]
		else ret[r].push(item)
	})
	
	return ret
}
*/
