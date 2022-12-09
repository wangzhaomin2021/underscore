// @wzm 2022-12-9
import sample from './sample.js';

// Shuffle a collection.
export default function shuffle(obj) {
  return sample(obj, Infinity);
}
