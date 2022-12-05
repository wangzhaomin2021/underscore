// @wzm 2022-12-5
// Internal helper to generate a function to obtain property `key` from `obj`.
export default function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}
