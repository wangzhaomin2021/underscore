// @wzm 2022-12-17
// Predicate-generating function. Often useful outside of Underscore.
export default function constant(value) {
  return function() {
    return value;
  };
}
