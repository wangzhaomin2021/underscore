// @wzm 2022-12-19
// Returns a function that will only be executed on and after the Nth call.
export default function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}
