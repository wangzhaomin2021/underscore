// @wzm 2022-12-5
// A (possibly faster) way to get the current timestamp as an integer.
export default Date.now || function() {
  return new Date().getTime();
};
