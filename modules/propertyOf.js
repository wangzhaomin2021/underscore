// @wzm 2023-1-5
import noop from './noop.js';
import get from './get.js';

// Generates a function for a given object that returns a given property.
export default function propertyOf(obj) {
  if (obj == null) return noop;
  return function(path) {
    return get(obj, path);
  };
}
