// @wzm 2023-1-5
// Internal function to obtain a nested property in `obj` along `path`.
export default function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}
