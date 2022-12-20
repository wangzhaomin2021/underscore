// @wzm 2022-12-19
// Returns a function that will only be executed up to (but not including) the
// Nth call.
export default function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
} 

/*
function before(fn, times) {
	let result
	
	return (...args) => {
		if (--times > 0) {
			return result = fn.apply(this, ...args)
		}
		fn = null
		return result
	}
}
*/
