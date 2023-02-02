/**
 * @summary Checks whether a value is an array with more than zero items
 * @param {unknown} incomingValue Value to check
 * @return {boolean}
*/
function isPositiveArray<T>(incomingValue: T): boolean {
  return Array.isArray(incomingValue)
    && incomingValue.length > 0;
}

export default isPositiveArray;
