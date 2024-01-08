/**
 * Author: Graham S. Paul
 * 8-clean_set.js
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  return [...set]
    .filter((el) => el.startsWith(startString))
    .map((el) => el.slice(startString.length))
    .join('-');
}
