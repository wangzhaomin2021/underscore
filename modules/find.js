// @wzm 2022-12-21
import isArrayLike from './_isArrayLike.js';
import findIndex from './findIndex.js';
import findKey from './findKey.js';

// Return the first value which passes a truth test.
export default function find(obj, predicate, context) {
  var keyFinder = isArrayLike(obj) ? findIndex : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}

/*
function find(arrOrObject, cb, thisArg) {
	const keys = Array.isArray(arrOrObject) ? null : Object.keys(arrOrObject)
	const len = keys ? keys.length : arrOrObject.length
	for(let i = 0; i < len; i++) {
		const key = keys ? keys[i] : i
		if (cb.call(thisArg || null, arrOrObject[key], key, arrOrObject)) return arrOrObject[key]
	}
}
*/
