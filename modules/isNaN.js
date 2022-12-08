// @wzm 2022-12-8
import { _isNaN } from './_setup.js';
import isNumber from './isNumber.js';

// Is the given value `NaN`?
export default function isNaN(obj) {
  return isNumber(obj) && _isNaN(obj);
}
