// @wzm 2022-12-22
import filter from './filter.js';

// Trim out all falsy values from an array.
export default function compact(array) {
  return filter(array, Boolean);
}
