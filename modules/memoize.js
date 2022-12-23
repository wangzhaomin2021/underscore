// @wzm 2022-12-23
import has from './_has.js';

// Memoize an expensive function by storing its results.
export default function memoize(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!has(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}

/*

function memorize(fn, hasher) {
	const memFn = function(...args) {
		const cache = memFn.cache
		const mem_key = hasher ? hasher.apply(this, args) : args[0]
		// if (mem_key in cache) return cache[mem_key]
		// else return cache[mem_key] = fn.apply(this, args)
		
		return mem_key in cache ? cache[mem_key] : cache[mem_key] = fn.apply(this, args)
	}
	
	memFn.cache = {}
	return memFn
}

*/
