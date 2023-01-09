// @wzm 2023-1-9
import restArguments from './restArguments.js';
import unzip from './unzip.js';

// Zip together multiple lists into a single array -- elements that share
// an index go together.
export default restArguments(unzip);
