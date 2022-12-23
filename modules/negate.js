// @wzm 2022-12-23
// Returns a negated version of the passed-in predicate.
export default function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}
