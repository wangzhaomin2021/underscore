// @wzm 2022-12-3
// Is a given variable an object?
export default function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}
