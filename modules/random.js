// @wzm 2022-12-20
// Return a random integer between `min` and `max` (inclusive).
export default function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}
