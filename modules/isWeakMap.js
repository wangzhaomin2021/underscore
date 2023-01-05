// @wzm 2023-1-5
import tagTester from './_tagTester.js';
import { isIE11 } from './_stringTagBug.js';
import { ie11fingerprint, weakMapMethods }  from './_methodFingerprint.js';

export default isIE11 ? ie11fingerprint(weakMapMethods) : tagTester('WeakMap');
